/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const hotmartLink = "https://go.hotmart.com/O104953919R";

  const dores = [
    "Ansiedade e mente agitada no dia a dia",
    "Medo e insegurança diante dos desafios",
    "Falta de paz interior e descanso emocional",
    "Desejo de se aproximar mais de Deus",
    "Necessidade de direção espiritual para seguir com mais confiança",
  ];

  const conteudos = [
    "Orações guiadas para cada um dos 30 dias",
    "Reflexões espirituais simples e profundas",
    "Palavras de encorajamento para fortalecer sua fé",
    "Método prático, acessível e fácil de seguir",
  ];

  const beneficios = [
    "Paz interior em meio aos dias difíceis",
    "Clareza mental para respirar, refletir e seguir",
    "Força emocional para enfrentar lutas com mais fé",
    "Esperança renovada para recomeçar com confiança",
    "Sensação de presença divina acompanhando sua jornada",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcf8] via-[#f7f4eb] to-[#eef3ea] text-slate-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-100 blur-3xl" />
          <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-yellow-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
              Jornada espiritual acolhedora • 30 dias para respirar, orar e se fortalecer
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
              30 Dias de Oração — Um caminho de paz, força e transformação
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Renove sua fé, acalme sua mente e fortaleça seu espírito com um guia prático de oração para cada dia por apenas R$ 9,90.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="rounded-2xl bg-white px-6 py-3 text-lg font-semibold text-slate-900 shadow">
                Apenas R$ 9,90 • Acesso imediato
              </div>
              <a
                href={hotmartLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-slate-900 px-8 py-4 text-base font-medium text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Começar meus 30 dias agora
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Um passo simples hoje pode mudar a forma como você atravessa os próximos dias.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">Paz</p>
              <p className="mt-3 text-slate-600">
                Um momento diário para silenciar a mente e acolher o coração com fé.
              </p>
            </div>
            <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">Força</p>
              <p className="mt-3 text-slate-600">
                Palavras que fortalecem emocionalmente e ajudam você a seguir com coragem.
              </p>
            </div>
            <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-700">Transformação</p>
              <p className="mt-3 text-slate-600">
                Uma jornada de 30 dias para sentir mais presença, esperança e direção espiritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Para quem é</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Para quem deseja encontrar refúgio espiritual em meio à correria da vida
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Este guia foi pensado para pessoas cristãs ou espiritualizadas que sentem o coração cansado e querem voltar a viver com mais paz, fé e esperança.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <ul className="space-y-4">
              {dores.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    ✓
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">O que você vai encontrar</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Um guia acolhedor para acompanhar você dia após dia
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cada página foi pensada para tornar sua jornada espiritual mais simples, leve e possível, mesmo para quem está recomeçando agora.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {conteudos.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-100 to-blue-100" />
                <p className="text-lg font-medium leading-7 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Benefícios e transformações</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Mais do que um material: uma experiência diária de acolhimento espiritual
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Em poucos minutos por dia, você cria um espaço de pausa, conexão e renovação interior. É um convite gentil para começar hoje e perceber, ao longo do caminho, sua fé sendo fortalecida com suavidade.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {beneficios.map((item) => (
              <div key={item} className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm">
                <p className="text-base font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#f7f3e7] via-white to-[#edf2eb] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Garantia emocional</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Você não precisa ser experiente para começar
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Mesmo que você esteja com a fé enfraquecida, sem constância na oração ou apenas precisando recomeçar, este guia foi feito para acolher você com leveza. Não importa em que ponto da sua caminhada espiritual você está — o importante é dar o primeiro passo com sinceridade e abrir espaço para que a paz floresça dentro de você.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-center text-white shadow-2xl md:px-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Comece hoje</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Sua jornada de paz, força e transformação pode começar agora
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Por apenas R$ 9,90, reserve alguns minutos do seu dia, entregue suas preocupações em oração e permita-se viver 30 dias de renovação espiritual. Quanto antes você começar, antes sentirá os frutos dessa caminhada.
          </p>
          <div className="mt-10">
            <a
              href={hotmartLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Quero começar meus 30 dias agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
