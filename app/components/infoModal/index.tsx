import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useEffect, useState } from 'react';
import { FaPhoneFlip } from 'react-icons/fa6';
import { MdOutlineMail, MdOutlinePhoneEnabled } from 'react-icons/md';

const getFromSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

const setToSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export function InfoModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const isAlertOpen = getFromSessionStorage('alert-dialog');

    if (isAlertOpen === null) {
      setToSessionStorage('alert-dialog', 'true');
      setIsOpen(true);
      return;
    }

    setIsOpen(getFromSessionStorage('alert-dialog') === 'true');
  }, []);

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={() => {
        setToSessionStorage('alert-dialog', 'false');
        setIsOpen(false);
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-cptext-primary">
            Esclarecimento aos nossos clientes e colaboradores
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-700">
            A CP Créditos e Empresas Associadas{' '}
            <strong>não solicita depósitos</strong>, transferências,
            adiantamentos ou qualquer tipo de pagamento de taxas a seus
            clientes.
            <br />
            <br />
            Caso receba contato de alguém solicitando dinheiro em nosso nome,
            pedimos que nos informe imediatamente por meio dos canais oficiais:
            <br />
            <br />
            <span className="flex gap-2 items-center">
              <MdOutlineMail /> E-mail:
              atendimento@cpassessoriafinanceira.com.br
            </span>
            <span className="flex gap-2 items-center">
              <MdOutlinePhoneEnabled /> Telefone: (11) 3705-5709
            </span>
            <br />
            Estamos à disposição para esclarecer qualquer dúvida.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              setToSessionStorage('alert-dialog', 'false');
              setIsOpen(false);
            }}
            className="bg-cpblue-400"
          >
            Ok
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
