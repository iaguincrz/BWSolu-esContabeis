import { 
  Building2, 
  Calculator, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Zap,
  FileText,
  Search,
  Award,
  Scale
} from 'lucide-react';

export const services = [
  { 
    id: "abertura",
    slug: "abertura-de-empresa",
    icon: Building2, 
    title: "Abertura de Empresa", 
    benefit: "Sem burocracia", 
    desc: "Comece do jeito certo. Estruturamos seu negócio com o enquadramento jurídico e tributário mais vantajoso desde o primeiro dia.",
    fullContent: "Abrir uma empresa envolve decisões críticas que impactam seu futuro financeiro. Na Best Way Soluções Contábeis, cuidamos de todo o processo: desde a escolha do CNAE correto até o registro nos órgãos competentes. Nosso foco é garantir que você comece pagando o mínimo de imposto possível dentro da legalidade.",
    price: "R$ 600,00 a R$ 1.500,00",
    observations: "Fora as taxas da Junta Comercial e Prefeitura.",
    offerings: [
      { title: "Escolha do tipo de empresa", description: "Ajudamos nossos clientes a entender as diferenças entre os tipos de empresa disponíveis (LTDA, EIRELI, S.A, etc.) e a escolher a opção mais adequada para o seu negócio." },
      { title: "Elaboração do contrato social", description: "Desenvolvemos o contrato social da empresa, levando em conta as particularidades do negócio e as necessidades dos sócios." },
      { title: "Registro na Junta Comercial", description: "Cuidamos de todo o processo de registro da empresa na Junta Comercial, garantindo que a documentação seja apresentada corretamente e em conformidade com as normas." },
      { title: "Obtenção de alvarás e licenças", description: "Ajudamos nossos clientes a obter as licenças e alvarás necessários para o funcionamento da empresa, como o Alvará de Funcionamento, Licença Sanitária, entre outros." },
      { title: "Inscrição nos órgãos reguladores", description: "Auxiliamos na inscrição da empresa nos órgãos reguladores, como a Receita Federal, Secretaria da Fazenda, Previdência Social, entre outros." },
      { title: "Cadastro na Prefeitura", description: "Realizamos o cadastro da empresa na Prefeitura, garantindo que o negócio esteja regularizado e possa exercer suas atividades dentro das normas legais." }
    ],
    differentials: [
      "Atendimento personalizado",
      "Equipe Multidisciplinar e Especializada",
      "Tecnologia e Inovação",
      "Transparência e Confiabilidade",
      "Suporte Proativo",
      "Soluções Integradas",
      "Foco na Redução de Custos e Aumento de Eficiência",
      "Experiência e Credibilidade"
    ]
  },
  { 
    id: "alteracao",
    slug: "alteracao-contratual",
    icon: FileText, 
    title: "Alteração Contratual", 
    benefit: "Flexibilidade", 
    desc: "Mudança de sócios, endereço ou atividade? Cuidamos de toda a burocracia para manter sua empresa atualizada.",
    fullContent: "Sua empresa cresceu ou mudou de rumo? Realizamos todas as alterações necessárias no seu contrato social, garantindo que tudo esteja em conformidade com a legislação vigente e registrado nos órgãos competentes.",
    price: "R$ 500,00 a R$ 1.200,00",
    observations: "Depende se há mudança de sócios ou endereço."
  },
  { 
    id: "baixa",
    slug: "baixa-de-empresa",
    icon: Zap, 
    title: "Baixa de Empresa", 
    benefit: "Encerramento seguro", 
    desc: "Encerre suas atividades de forma correta e evite problemas futuros com o fisco.",
    fullContent: "Encerrar uma empresa exige tanto cuidado quanto abrir. Realizamos a baixa em todos os órgãos (Federal, Estadual e Municipal), garantindo que não fiquem pendências que possam prejudicar os sócios no futuro.",
    price: "R$ 800,00 a R$ 2.000,00",
    observations: "Inclui a regularização de pendências fiscais."
  },
  { 
    id: "fiscal",
    slug: "departamento-fiscal",
    icon: Calculator, 
    title: "Departamento Fiscal", 
    benefit: "Gestão de Tributos", 
    desc: "Foco na conformidade com a legislação e na redução legal da carga tributária (Elisão Fiscal).",
    fullContent: "Nossa gestão tributária garante que sua empresa pague apenas o necessário. Atuamos na escrituração, apuração de impostos e entrega de todas as obrigações acessórias com precisão.",
    offerings: [
      { title: "Escrituração Fiscal", description: "Registro de todas as notas fiscais de entrada, saída e serviços tomados." },
      { title: "Apuração de Impostos", description: "Cálculo mensal de tributos (Simples Nacional, ISS, ICMS, PIS, COFINS, IRPJ e CSLL)." },
      { title: "Entrega de Obrigações Acessórias", description: "Transmissão de declarações obrigatórias (DEFIS, PGDAS, SPED Fiscal, EFD Contribuições e GIA)." },
      { title: "Planejamento Tributário", description: "Análise periódica para verificar se a empresa está no regime mais econômico (Simples Nacional vs. Lucro Presumido)." },
      { title: "Suporte em Notas Fiscais", description: "Auxílio na configuração de CFOP, NCM e suporte para emissão correta de NF-e e NFS-e." }
    ]
  },
  { 
    id: "pessoal",
    slug: "departamento-pessoal",
    icon: Users, 
    title: "Departamento Pessoal", 
    benefit: "Gestão de RH", 
    desc: "Gestão completa da relação entre empresa e colaborador, garantindo o cumprimento da CLT.",
    fullContent: "Cuidamos de toda a rotina trabalhista da sua empresa, desde a admissão até o desligamento, garantindo segurança jurídica e conformidade com o eSocial.",
    offerings: [
      { title: "Admissão e Demissão", description: "Registro de funcionários, elaboração de contratos de trabalho e cálculo de rescisões." },
      { title: "Folha de Pagamento", description: "Elaboração mensal do holerite, cálculo de horas extras, adicionais (noturno, insalubridade) e descontos." },
      { title: "Gestão de Encargos Sociais", description: "Emissão das guias de INSS (GPS/DARF) e FGTS (FGTS Digital)." },
      { title: "Controle de Férias e 13º Salário", description: "Escalonamento de períodos aquisitivos e cálculos de gratificações natalinas." },
      { title: "eSocial", description: "Envio de todos os eventos periódicos e não periódicos exigidos pelo governo federal." },
      { title: "Informe de Rendimentos", description: "Preparação anual de dados para a declaração de IRPF dos colaboradores." }
    ]
  },
  { 
    id: "inpi",
    slug: "propriedade-intelectual",
    icon: Award, 
    title: "Propriedade Intelectual (INPI)", 
    benefit: "Proteja sua Marca", 
    desc: "Sua marca é seu maior patrimônio. Proteja-a contra cópias e garanta o uso exclusivo.",
    fullContent: "O registro de marca no INPI é a única forma de garantir a propriedade do nome e logo da sua empresa em todo o território nacional.",
    offerings: [
      { title: "Busca de Viabilidade", description: "R$ 200,00 a R$ 500,00. Essencial para saber se o nome está livre." },
      { title: "Registro de Marca", description: "R$ 1.200,00 a R$ 2.500,00. Acompanhamento por todo o processo (cerca de 1 ano)." },
      { title: "Patentes", description: "Sob consulta. Exige redação técnica complexa, partindo geralmente de R$ 4.000,00." }
    ]
  },
  { 
    id: "regularizacao-fiscal",
    slug: "regularizacao-fiscal",
    icon: Scale, 
    title: "Regularização Fiscal", 
    benefit: "Parcelamento de Débitos", 
    desc: "Recupere a saúde financeira da sua empresa com o parcelamento estratégico de dívidas tributárias.",
    fullContent: "Analisamos suas dívidas e buscamos as melhores opções de parcelamento e descontos oferecidos pelo governo.",
    price: "R$ 300,00 a R$ 1.000,00",
    observations: "Ou uma porcentagem sobre o valor do benefício/desconto obtido em casos de grandes dívidas."
  },
  { 
    id: "certificado-digital",
    slug: "certificado-digital",
    icon: ShieldCheck, 
    title: "Certificado Digital", 
    benefit: "Segurança Digital", 
    desc: "Emita seu certificado digital com rapidez e segurança para assinar documentos e acessar portais do governo.",
    fullContent: "O certificado digital é a sua identidade no meio eletrônico. Com ele, você pode assinar documentos com validade jurídica, emitir notas fiscais e realizar transações bancárias com total segurança.",
    offerings: [
      { title: "Pessoa Física (e-CPF)", description: "R$ 160,00. Validade de 1 Ano. Ideal para profissionais liberais e sócios de empresas." },
      { title: "Pessoa Jurídica (e-CNPJ)", description: "R$ 200,00. Validade de 1 Ano. Necessário para a emissão de notas fiscais e obrigações da empresa." }
    ]
  },
  {
    id: "gestao-360",
    slug: "gestao-360",
    icon: Zap,
    title: "Gestão 360º",
    benefit: "Solução Completa",
    desc: "A solução definitiva para quem busca excelência em gestão contábil, fiscal e estratégica.",
    fullContent: "O Gestão 360º é o nosso pacote mais completo, desenhado para empresários que não querem se preocupar com burocracia e desejam focar 100% no crescimento do negócio. Unimos contabilidade de alta performance com consultoria estratégica.",
    price: "Sob Consulta",
    offerings: [
      { title: "Contabilidade Premium", description: "Relatórios mensais detalhados e análise de indicadores de desempenho." },
      { title: "BPO Financeiro", description: "Nós cuidamos do seu contas a pagar e receber, fluxo de caixa e conciliação bancária." },
      { title: "Planejamento Tributário Avançado", description: "Revisão constante para garantir a menor carga tributária possível." },
      { title: "Consultoria de Negócios", description: "Reuniões mensais de alinhamento estratégico com nossos especialistas." }
    ],
    differentials: [
      "Visão holística do negócio",
      "Redução drástica de tempo gasto com burocracia",
      "Tomada de decisão baseada em dados reais",
      "Suporte prioritário e exclusivo"
    ]
  },
  {
    id: "marketing-estrategico",
    slug: "marketing-estrategico",
    icon: BarChart3,
    title: "Marketing Estratégico",
    benefit: "Aumente suas Vendas",
    desc: "Suporte estratégico de marketing para impulsionar o faturamento da sua empresa.",
    fullContent: "Diferente de qualquer outra contabilidade, nós entendemos que para sua empresa crescer, ela precisa vender. Nosso acompanhamento de marketing estratégico oferece o suporte necessário para você posicionar sua marca e atrair mais clientes.",
    price: "Sob Consulta",
    observations: "Valor adicional mensal para clientes da base.",
    offerings: [
      { title: "Análise de Posicionamento", description: "Avaliamos como sua marca é vista no mercado e sugerimos melhorias." },
      { title: "Estratégias de Tráfego Pago", description: "Orientação sobre como investir em anúncios no Google e Meta." },
      { title: "Funil de Vendas", description: "Ajudamos a estruturar o caminho que seu cliente percorre até a compra." },
      { title: "Consultoria de Conteúdo", description: "Dicas de como se comunicar de forma eficaz nas redes sociais." }
    ],
    differentials: [
      "Foco total em ROI (Retorno sobre Investimento)",
      "Linguagem simples e direta",
      "Estratégias validadas para pequenas e médias empresas",
      "Acompanhamento mensal de resultados"
    ]
  }
];
