export function FooterFollowUsInformations() {
  return (
    <section className="flex gap-4 justify-between items-start bg-[#FFFFFF0D] rounded-[2rem] w-full p-8 md:p-12 flex-col md:flex-row h-hull">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-cptext-cyan text-lg">Atendimento</h3>
        <a
          className="text-white"
          href={import.meta.env.VITE_WHATSAPP}
          target="_blank"
        >
          Fale conosco
        </a>

        <a
          href="https://www.cpassessoriafinanceira.com.br/AVISO_DE_PRIVACIDADE_DE_DADOS.pdf"
          className="text-white whitespace"
          target="_blank"
        >
          Politicas de Privacidade e Compliance
        </a>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-cptext-cyan text-lg">
            Acompanhe a CP Créditos
          </h3>
          <div className="flex gap-4">
            <a
              className="text-white bg-white rounded-full"
              href={import.meta.env.VITE_FACEBOOK}
              target="_blank"
            >
              <img
                src="/assets/images/facebook.svg"
                alt="Facebook"
                className="min-w-12 size-12 "
              />
            </a>
            <a
              className="text-white rounded-full"
              href={import.meta.env.VITE_INSTAGRAM}
              target="_blank"
            >
              <img
                src="/assets/images/instagram.svg"
                alt="Instagram"
                className="min-w-12 size-12 "
              />
            </a>
            <a
              className="text-white bg-white rounded-full"
              href={import.meta.env.VITE_LINKEDIN}
              target="_blank"
            >
              <img
                src="/assets/images/linkedin.svg"
                alt="LinkedIn"
                className="min-w-12 size-12 "
              />
            </a>
            <a
              className="text-white bg-white rounded-full"
              href={import.meta.env.VITE_WHATSAPP}
              target="_blank"
            >
              <img
                src="/assets/images/whatsapp.svg"
                alt="Youtube"
                className="min-w-12 size-12 "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
