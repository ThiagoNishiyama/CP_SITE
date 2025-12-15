import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { PhoneInput } from '../ui/phone-input';
import { useState } from 'react';

('use client');

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { LoaderIcon } from 'lucide-react';

const formSchema = z.object({
  nome: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  telefone: z.string().nonempty('Telefone é obrigatório'),
  cpfCnpj: z
    .string({
      required_error: 'CPF/CNPJ é obrigatório.',
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return replacedDoc.length >= 11;
    }, 'CPF/CNPJ deve conter no mínimo 11 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return replacedDoc.length <= 14;
    }, 'CPF/CNPJ deve conter no máximo 14 caracteres.')
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, '');
      return !!Number(replacedDoc);
    }, 'CPF/CNPJ deve conter apenas números.'),
});

const formatCpfCnpj = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '');

  if (cleanedValue.length <= 11) {
    // CPF
    return cleanedValue
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  } else {
    // CNPJ
    return cleanedValue
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }
};

export function LeadForm({
  section,
  value,
  onOk,
}: {
  section: string;
  value?: string;
  onOk?: () => void;
}) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      cpfCnpj: '',
      telefone: '',
    },
  });

  const sendWhatsappMessage = (data: any) => {
    const sectionMap: Record<string, string> = {
      home: 'crédito pessoal',
      consignado: 'crédito consignado',
      imobiliario: 'crédito imobiliário',
      'consignado-publico': 'crédito consignado público',
      'consignado-federal': 'crédito consignado federal',
      'consignado-privado': 'crédito consignado privado',
      'consignado-inss': 'crédito consignado INSS',
      'financiamento-imovel': 'financiamento imobiliário',
      'home-equity': 'home equity',
      'credito-pessoal': 'crédito pessoal',
      fgts: 'FGTS saque aniversário',
      'financiamento-refinanciamento-veiculos':
        'financiamento ou refinanciamento de veículos',
      'cartao-consignado': 'cartão consignado',
      'cartao-beneficio-consignado': 'cartão benefício consignado',
      'cartao-credcesta': 'cartão Credcesta',
      consorcio: 'consórcio',
      seguros: 'seguro CPCréditos',
      'painel-solar': 'painel solar',
      'capital-de-giro': 'capital de giro',
      'operacoes-estruturadas': 'operações estruturadas',
    };

    const isCpf = data.cpfCnpj.replace(/\D/g, '').length <= 11;

    const sectionText = sectionMap[section] || 'crédito pessoal';
    const valorText = data.valor ? ` no valor de ${data.valor}` : '';
    const docType = isCpf ? 'CPF' : 'CNPJ';

    const message = `Olá, meu nome é ${data.nome} e gostaria de fazer uma simulação de ${sectionText}${valorText}.`;

    const phone = import.meta.env.VITE_CP_PHONE;
    const whatsappUrl = new URL('https://api.whatsapp.com/send');
    whatsappUrl.searchParams.append('phone', phone);
    whatsappUrl.searchParams.append('text', message);

    window.open(whatsappUrl.toString());

    onOk?.();
  };

  const onSubmit = async (data: any) => {
    try {
      const formUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
      const {
        VITE_GOOGLE_FORM_NAME,
        VITE_GOOGLE_FORM_EMAIL,
        VITE_GOOGLE_FORM_CPF,
        VITE_GOOGLE_FORM_PHONE,
        VITE_GOOGLE_FORM_VALUE,
        VITE_GOOGLE_FORM_SECTION,
      } = import.meta.env;

      const params = new URLSearchParams({
        [VITE_GOOGLE_FORM_NAME]: data.nome as string,
        [VITE_GOOGLE_FORM_EMAIL]: data.email as string,
        [VITE_GOOGLE_FORM_CPF]: data.cpfCnpj as string,
        [VITE_GOOGLE_FORM_PHONE]: data.telefone as string,
        [VITE_GOOGLE_FORM_VALUE]: value ? value.toString() : '',
        [VITE_GOOGLE_FORM_SECTION]: section as string,
      });

      await fetch(`${formUrl}${params.toString()}`, {
        mode: 'no-cors',
      });

      sendWhatsappMessage({
        ...data,
        valor: value,
        section,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nome<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Seu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cpfCnpj"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                CPF/CNPJ
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="CPF ou CNPJ"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    const formattedValue = formatCpfCnpj(value);
                    e.target.value = formattedValue;
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Telefone<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <PhoneInput
                  {...field}
                  placeholder="(11) 99999-9999"
                  defaultCountry="BR"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter className="flex justify-end">
          <Button
            type="button"
            variant="cpoutline"
            className="w-fit"
            onClick={onOk}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="cp"
            className="w-fit"
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <LoaderIcon className="animate-spin" />
            )}
            Simule Agora!
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}

export function SimulationModal({
  cta = 'Simule seu crédito',
  section = 'home',
  variant = 'cp',
  value,
}: {
  cta: string;
  section?: string;
  variant?: 'cp' | 'cpoutline' | 'cpcyan' | 'cpcyanoutline';
  value?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className="w-fit">
          {cta}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-cptext-primary">
            Simule seu crédito
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para ser direcionado a um de nossos
            consultores especializados.
          </DialogDescription>
          <LeadForm
            section={section}
            value={value}
            onOk={() => setIsOpen(false)}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
