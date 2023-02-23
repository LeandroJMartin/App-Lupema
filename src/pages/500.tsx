import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center py-36">
        <h1 className="text-xl lg:text-2xl text-blue">
          Ops! Este conteúdo não foi encontrado.
        </h1>

        <div className="pt-4">
          <Link href="/" className="text-gray text-base">
            Voltar para home
          </Link>
        </div>
      </div>
    </div>
  );
}
