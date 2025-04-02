export const aboutUs = [
    {
        subTitle: "Seu produto com as melhores linhas",
        title: "A GUAPI PAPÉIS desenvolve diversos papéis reciclados de alto desempenho",
        description: [
            "A GUAPI PAPÉIS® é referência no desenvolvimento de papéis reciclados de alto desempenho, atendendo com excelência os mercados interno e externo. Nosso compromisso com a qualidade, inovação e sustentabilidade está presente em cada etapa do processo, garantindo soluções eficientes e responsáveis para nossos clientes.",
            "Certificados pelo FSC™, nossos produtos são fabricados com tecnologia avançada, rigorosos controles de qualidade e uma equipe técnica altamente capacitada. Desde a logística reversa para a aquisição de aparas até a criteriosa seleção das matérias-primas e a entrega final, cada fase é conduzida com responsabilidade ambiental e foco na sustentabilidade.",
            "Na GUAPI PAPÉIS®, reciclamos mais do que papel: transformamos o futuro.",
        ],
    },
];

export const cardsLine = [
    { text: "Linha Uni", img: "uni.svg", key: "uni" },
    { text: "Linha Duo", img: "duo.svg", key: "duo" },
    { text: "Linha Carton", img: "carton.svg", key: "carton" },
];

export const uniData = {
    products: [
        {
            card: {
                text: "Uni Size NE",
                subTitle: "110 a 200 g/m² ",
                img: "uniSizeNe.svg",
                imgheels: 'uni.svg',
                key: "uni-size-ne",
                description: "Papel Miolo Size – Produzido conforme a especificação Guapi Papéis®.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Uni Size NE é um papel miolo de alta qualidade, produzido conforme a especificação Guapi Papéis®. Com gramatura entre 90 e 200 g/m², ele oferece a resistência e o desempenho ideais para processos de embalagem e conversão de papelão ondulado.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Papel Miolo Size – Produzido conforme a especificação Guapi Papéis®." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ],
                tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'Rct' },
                        { head: 'Cmt' },
                        { head: 'Tração umida' }
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Cobb tela' },
                        { head: 'Umidade' },
                        { head: 'SCT trans' }
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' }
                    ],
                    tableData: [
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtObj: 27, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: 50, telaMax: 100, umidadeMin: 7, umidadeMax: 8.50, sctMin: 2.40, sctMax: '-' },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtObj: 31, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: 2.80, sctMax: '-' },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 33, cmtObj: 34, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: 50, telaMax: 100, umidadeMin: 7, umidadeMax: 8.50, sctMin: 2.90, sctMax: '-' },
                        { gramatura: 135, gramaturaMin: 130, gramaturaMax: 140, rctMin: 22, rctObj: 23, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 22, rctObj: 24, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 35, cmtObj: 36, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 29, rctObj: 30, rctMax: '-', cmtMin: 37, cmtObj: 38, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: 3.80, sctMax: '-' },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 38, cmtObj: 39, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 31, rctObj: 32, rctMax: '-', cmtMin: 40, cmtObj: 42, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 45, cmtObj: 47, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 36, rctObj: 37, rctMax: '-', cmtMin: 45, cmtObj: 48, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
                    ]
                }
            }
        },
        {
            card: {
                text: "Uni Size RU NE",
                subTitle: "90 a 200 g/m²",
                img: "uniSizeNe.svg",
                imgheels: 'uni.svg',
                key: "uni-size-ru-ne",
                description: "Alta Performance – Projetado para máquinas de alta velocidade.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Miolo Size Especial é desenvolvido conforme a especificação Guapi Papéis®, garantindo qualidade e resistência para aplicações em embalagens e papelão ondulado. Com gramatura entre 90 e 200 g/m², é uma solução versátil para diversos processos de conversão.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Performance – Projetado para máquinas de alta velocidade." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'cmt' },
                        { head: 'Tração umida' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ]
                    ,
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 90, gramaturaMin: 86, gramaturaMax: 94, rctMin: 9, rctObj: 10, rctMax: '-', cmtMin: 20, cmtObj: 22, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 100, gramaturaMin: 96, gramaturaMax: 104, rctMin: 12, rctObj: 13, rctMax: '-', cmtMin: 22, cmtObj: 24, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 14, rctObj: 15, rctMax: '-', cmtMin: 25, cmtObj: 27, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtObj: 28, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 125, gramaturaMin: 120, gramaturaMax: 130, rctMin: 18, rctObj: 19, rctMax: '-', cmtMin: 28, cmtObj: 30, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtObj: 32, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 24, rctObj: 25, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 154, gramaturaMax: 166, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 27, rctObj: 28.5, rctMax: '-', cmtMin: 33, cmtObj: 34, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 28, rctObj: 29, rctMax: '-', cmtMin: 34, cmtObj: 35.5, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 35, cmtObj: 36, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 36, cmtObj: 37, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Uni Size ES 30",
                subTitle: "110 a 200 g/m²",
                img: "uniSizeEs30.svg",
                imgheels: 'uni.svg',
                key: "uni-size-es-30",
                description: "Alta Qualidade – Projetado para ramo frigorífico.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Miolo Size Especial 30 possui índice Cobb entre 30 e 50, ideal para o ramo frigorífico. Com gramatura entre 110 e 200 g/m², garante resistência e eficiência em embalagens que necessitam de proteção contra umidade e variações ambientais.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Qualidade – Projetado para ramo frigorífico." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902).Índice Cobb: 60-80" },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'cmt' },
                        { head: 'Tração umida' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtObj: 27, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtObj: 31, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 33, cmtObj: 34, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 135, gramaturaMin: 130, gramaturaMax: 140, rctMin: 22, rctObj: 23, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 22, rctObj: 24, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 35, cmtObj: 36, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 29, rctObj: 30, rctMax: '-', cmtMin: 37, cmtObj: 38, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 38, cmtObj: 39, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 31, rctObj: 32, rctMax: '-', cmtMin: 40, cmtObj: 42, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 45, cmtObj: 47, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 36, rctObj: 37, rctMax: '-', cmtMin: 45, cmtObj: 48, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Uni Comun NE",
                subTitle: "90 a 200 g/m²",
                img: "uniComumNe.svg",
                imgheels: 'uni.svg',
                key: "uni-comun-ne",
                description: "Alta Performance – Projetado para embalagens e papelão ondulado."
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Miolo Comum é desenvolvido conforme a especificação Guapi Papéis®, garantindo qualidade e resistência para aplicações em embalagens e papelão ondulado. Com gramatura entre 90 e 200 g/m², é uma solução versátil para diversos processos de conversão.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Performance – Projetado para embalagens e papelão ondulado." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'cmt' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 90, gramaturaMin: 86, gramaturaMax: 94, rctMin: 8, rctObj: 9, rctMax: '-', cmtMin: 16, cmtObj: 17, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 100, gramaturaMin: 96, gramaturaMax: 104, rctMin: 10, rctObj: 11, rctMax: '-', cmtMin: 18, cmtObj: 19, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 11, rctObj: 12, rctMax: '-', cmtMin: 20, cmtObj: 21, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 12, rctObj: 13, rctMax: '-', cmtMin: 21, cmtObj: 22, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 15, rctObj: 16, rctMax: '-', cmtMin: 23, cmtObj: 24, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 135, gramaturaMin: 130, gramaturaMax: 140, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 24, cmtObj: 25, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 17, rctObj: 18, rctMax: '-', cmtMin: 25, cmtObj: 26, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 26, cmtObj: 27, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 154, gramaturaMax: 166, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 27, cmtObj: 28, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 22, rctObj: 23, rctMax: '-', cmtMin: 28, cmtObj: 29, cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: '', rctObj: '', rctMax: '', cmtMin: '', cmtObj: '', cmtMax: '', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: '', rctObj: '', rctMax: '', cmtMin: '', cmtObj: '', cmtMax: '', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 28, rctObj: 29, rctMax: '-', cmtMin: '-', cmtObj: '-', cmtMax: '-', feltroMin: 40, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Uni Size RU 30",
                subTitle: "90 a 200 g/m²",
                img: "uniSizeRu30.svg",
                imgheels: 'uni.svg',
                key: "uni-size-ru-30",
                description: "Alta Qualidade – Projetado para ramo frigorífico.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Miolo Size RU 30 foi desenvolvido para atender às necessidades do ramo frigorífico, proporcionando resistência e desempenho ideais para embalagens que exigem alta qualidade. Com gramatura entre 90 e 200 g/m², possui índice Cobb entre 30 e 50, garantindo menor absorção de umidade e maior durabilidade.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Qualidade – Projetado para ramo frigorífico." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'cmt' },
                        { head: 'porosidade' },
                        { head: 'Tração umida' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 90, gramaturaMin: 86, gramaturaMax: 94, rctMin: 9, rctObj: 10, rctMax: '-', cmtMin: 20, cmtObj: 22, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 30, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 100, gramaturaMin: 96, gramaturaMax: 104, rctMin: 12, rctObj: 13, rctMax: '-', cmtMin: 22, cmtObj: 24, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 30, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 14, rctObj: 15, rctMax: '-', cmtMin: 25, cmtObj: 27, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 30, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtObj: 28, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 30, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 125, gramaturaMin: 120, gramaturaMax: 130, rctMin: 18, rctObj: 19, rctMax: '-', cmtMin: 28, cmtObj: 29, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 30, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtObj: 32, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 30, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 30, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 24, rctObj: 25, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 40, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 154, gramaturaMax: 166, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 40, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 27, rctObj: 28, rctMax: '-', cmtMin: 33, cmtObj: 34, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 40, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 28, rctObj: 29, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 40, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 35, cmtObj: 36, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 40, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 36, cmtObj: 37, cmtMax: '-', porosidadeMin: 10, porosidadeMax: 50, porosidadeObj: 40, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Uni Size ES 50",
                subTitle: "110 a 200 g/m²",
                img: "uniSizeEs50.svg",
                imgheels: 'uni.svg',
                key: "uni-size-es-50",
                description: "Alta Performance – Projetado para onduladeiras de alta performance.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Miolo Size Especial 50 foi projetado para onduladeiras de alta performance, oferecendo resistência superior e qualidade aprimorada. Com índice Cobb entre 50 e 100 e gramatura entre 110 e 200 g/m², é uma solução eficiente para a produção de embalagens duráveis.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Performance – Projetado para onduladeiras de alta performance." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'cmt' },
                        { head: 'Tração umida' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtMax: '-', cmtObj: 27, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtMax: '-', cmtObj: 31, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 33, cmtMax: '-', cmtObj: 34, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 135, gramaturaMin: 130, gramaturaMax: 140, rctMin: 22, rctObj: 23, rctMax: '-', cmtMin: 34, cmtMax: '-', cmtObj: 35, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 22, rctObj: 24, rctMax: '-', cmtMin: 34, cmtMax: '-', cmtObj: 35, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 35, cmtMax: '-', cmtObj: 36, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 29, rctObj: 30, rctMax: '-', cmtMin: 37, cmtMax: '-', cmtObj: 38, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 38, cmtMax: '-', cmtObj: 39, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 31, rctObj: 32, rctMax: '-', cmtMin: 40, cmtMax: '-', cmtObj: 42, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 45, cmtMax: '-', cmtObj: 47, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 36, rctObj: 37, rctMax: '-', cmtMin: 45, cmtMax: '-', cmtObj: 48, tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Uni Size 50",
                subTitle: "90 a 200 g/m²",
                img: "uniSize50.svg",
                imgheels: 'uni.svg',
                key: "uni-size-50",
                description: "Alta Performance – Projetado para onduladeiras de alta performance."
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Miolo Size Especial é um papel de alta qualidade, desenvolvido especialmente para atender às exigências das onduladeiras de alta performance. Com um índice de Cobb entre 50 e 100, ele garante a resistência e absorção ideais para processos de embalagem e conversão de papelão ondulado.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Performance – Projetado para onduladeiras de alta performance." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'cmt' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 90, gramaturaMin: 86, gramaturaMax: 94, rctMin: 9, rctObj: 10, rctMax: '-', cmtMin: 20, cmtObj: 22, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 100, gramaturaMin: 96, gramaturaMax: 104, rctMin: 12, rctObj: 13, rctMax: '-', cmtMin: 22, cmtObj: 24, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 14, rctObj: 15, rctMax: '-', cmtMin: 25, cmtObj: 27, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtObj: 28, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 125, gramaturaMin: 120, gramaturaMax: 130, rctMin: 18, rctObj: 19, rctMax: '-', cmtMin: 28, cmtObj: 29, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtObj: 32, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 24, rctObj: 25, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 31, cmtObj: 33, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 27, rctObj: 28, rctMax: '-', cmtMin: 33, cmtObj: 34, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 28, rctObj: 29, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 35, cmtObj: 36, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 36, cmtObj: 37, cmtMax: '-', feltroMin: 50, feltroMax: 100, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Uni Size ES NE",
                subTitle: "110 a 200 g/m²",
                img: "uniSizeEsNe.svg",
                imgheels: 'uni.svg',
                key: "uni-size-es-ne",
                description: "Alta Performance – Projetado para máquinas de alta velocidade.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Miolo Size Especial é fabricado conforme a especificação da Guapi Papéis®, assegurando alto padrão de qualidade para aplicações industriais. Com gramatura entre 110 e 200 g/m², é uma excelente escolha para processos de conversão e embalagem.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Performance – Projetado para máquinas de alta velocidade." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'cmt' },
                        { head: 'Tração umida' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtObj: 27, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtObj: 31, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 33, cmtObj: 34, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 135, gramaturaMin: 130, gramaturaMax: 140, rctMin: 22, rctObj: 23, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 22, rctObj: 24, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 35, cmtObj: 36, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 29, rctObj: 30, rctMax: '-', cmtMin: 37, cmtObj: 38, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 38, cmtObj: 39, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 31, rctObj: 32, rctMax: '-', cmtMin: 40, cmtObj: 42, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 45, cmtObj: 47, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 36, rctObj: 37, rctMax: '-', cmtMin: 45, cmtObj: 48, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Uni Size EX",
                subTitle: "110 a 200 g/m²",
                img: "uniSizeEx.svg",
                imgheels: 'uni.svg',
                key: "uni-size-ex",
                description: "Exportação – Projetado para mercado externo.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Miolo Size Exportação segue rigorosos padrões internacionais, garantindo qualidade para diversos segmentos do mercado externo. Com gramatura entre 110 e 200 g/m², é produzido conforme a especificação da Guapi Papéis®, assegurando alto desempenho e confiabilidade.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Exportação – Projetado para mercado externo." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'cmt' },
                        { head: 'Tração umida' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtObj: 27, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtObj: 31, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 33, cmtObj: 34, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 135, gramaturaMin: 130, gramaturaMax: 140, rctMin: 22, rctObj: 23, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 22, rctObj: 24, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 35, cmtObj: 36, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 29, rctObj: 30, rctMax: '-', cmtMin: 37, cmtObj: 38, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 38, cmtObj: 39, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 31, rctObj: 32, rctMax: '-', cmtMin: 40, cmtObj: 42, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 45, cmtObj: 47, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 36, rctObj: 37, rctMax: '-', cmtMin: 45, cmtObj: 48, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 30, feltroMax: 80, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        }
    ],

    commonInfo: {
        qualityStandards: [
            "Testes Obrigatórios (RCT e CMT)",
            "Controle de Qualidade Rigoroso (50 ± 2% UR, 23 ± 1°C)",
            "Certificação FSC® (Cadeia de Custódia: C120902)",
            "Produção sustentável",
            "Garantia de qualidade ISO 9001"
        ],
        certifications: [
            "FSC®",
            "ISO 9001",
            "ISO 14001"
        ]
    }
};


export const duoData = {
    products: [
        {
            card: {
                text: "Duo Size White",
                subTitle: "120 a 200 g/m²",
                img: "duoSizeWhite.svg",
                imgheels: 'duo.svg',
                key: "duo-size-white",
                description: "Alta Performance – Projetado para diversas aplicações.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel WTL Size é produzido conforme a especificação da Guapi Papéis®, garantindo qualidade e resistência para diversas aplicações. Com gramatura entre 120 e 200 g/m², é ideal para conversão em embalagens sofisticadas.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Performance – Projetado para diversas aplicações." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'Mullen' },
                        { head: 'Porosidade' },
                        { head: 'Alvura' },
                        { head: 'Delaminação' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb Tela' },
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 14, rctObj: 15, rctMax: '-', mullenMin: 32, mulleMax: 38, mullenObj: 35, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 15, rctObj: 16, rctMax: '-', mullenMin: 35, mulleMax: 41, mullenObj: 38, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 19, rctObj: 20, rctMax: '-', mullenMin: 38, mulleMax: 44, mullenObj: 41, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 21, rctObj: 22, rctMax: '-', mullenMin: 42, mulleMax: 48, mullenObj: 45, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 25, rctObj: 26, rctMax: '-', mullenMin: 44, mulleMax: 50, mullenObj: 47, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 175, gramaturaMin: 168, gramaturaMax: 182, rctMin: 26, rctObj: 27, rctMax: '-', mullenMin: 46, mulleMax: 52, mullenObj: 49, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 28, rctObj: 29, rctMax: '-', mullenMin: 60, mulleMax: 66, mullenObj: 63, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 15, delaminacaoMax: 19, delaminacaoObj: 17, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Duo Size Rec Ex",
                subTitle: "110 a 200 g/m²",
                img: "duoSizeRecEx.svg",
                imgheels: 'duo.svg',
                key: "duo-size-rec-ex",
                description: "Exportação – Projetado para mercado externo.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Test Liner Reciclado Exportação é desenvolvido com 100% fibra reciclada, promovendo sustentabilidade e resistência para embalagens do mercado externo. Com gramatura entre 110 e 200 g/m², oferece alto desempenho em aplicações exigentes.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Exportação – Projetado para mercado externo." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'Mullen' },
                        { head: 'Porosidade' },
                        { head: 'Tração Lg' },
                        { head: 'Teor de cinzas' },
                        { head: 'Alongamento' },
                        { head: 'Delaminação' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 110, gramaturaMin: 105, gramaturaMax: 115, rctMin: 14, rctObj: 15.5, rctMax: '-', mullenMin: 30, mulleMax: 40, mullenObj: 35, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 18, rctObj: 19, rctMax: '-', mullenMin: 40, mulleMax: 50, mullenObj: 45, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 125, gramaturaMin: 120, gramaturaMax: 130, rctMin: 19, rctObj: 20, rctMax: '-', mullenMin: 42, mulleMax: 52, mullenObj: 47, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 20, rctObj: 21, rctMax: '-', mullenMin: 50, mulleMax: 60, mullenObj: 55, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 22, rctObj: 23, rctMax: '-', mullenMin: 55, mulleMax: 65, mullenObj: 60, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 25, rctObj: 26, rctMax: '-', mullenMin: 55, mulleMax: 60, mullenObj: 57.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 27, rctObj: 28, rctMax: '-', mullenMin: 60, mulleMax: 65, mullenObj: 62.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 30, rctObj: 32, rctMax: '-', mullenMin: 65, mulleMax: 65, mullenObj: 62.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: 17, tracaoMax: 25, tracaoObj: 21, teorMin: 3, teorMax: 5, teorObj: 4, alongamentoMin: 2, alongamentoMax: 5, alongamentoObj: 3.5, delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 31, rctObj: 33, rctMax: '-', mullenMin: 65, mulleMax: 67, mullenObj: 64.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 190, gramaturaMin: 182, gramaturaMax: 198, rctMin: 32, rctObj: 34, rctMax: '-', mullenMin: 67, mulleMax: 70, mullenObj: 67.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: 17, tracaoMax: 27, tracaoObj: 22, teorMin: 3, teorMax: 5, teorObj: 4, alongamentoMin: 2, alongamentoMax: 5, alongamentoObj: 3.5, delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 35, rctObj: 37, rctMax: '-', mullenMin: 70, mulleMax: 80, mullenObj: 75, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Duo Size Rec",
                subTitle: "110 a 200 g/m²",
                img: "duoSizeRec.svg",
                imgheels: 'duo.svg',
                key: "duo-size-rec",
                description: "Sustentabilidade e Resistência – 100% fibra reciclada.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Test Liner Reciclado é composto por 100% fibra reciclada, garantindo sustentabilidade sem comprometer a resistência. Com gramatura entre 110 e 200 g/m², é ideal para embalagens ecológicas e sustentáveis.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Sustentabilidade e Resistência – 100% fibra reciclada." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'Mullen' },
                        { head: 'Porosidade' },
                        { head: 'Tração Lg' },
                        { head: 'Teor de cinzas' },
                        { head: 'Alongamento' },
                        { head: 'Delaminação' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 110, gramaturaMin: 105, gramaturaMax: 115, rctMin: 14, rctObj: 15.5, rctMax: '-', mullenMin: 30, mulleMax: 40, mullenObj: 35, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 18, rctObj: 19, rctMax: '-', mullenMin: 40, mulleMax: 50, mullenObj: 45, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 125, gramaturaMin: 120, gramaturaMax: 130, rctMin: 19, rctObj: 20, rctMax: '-', mullenMin: 42, mulleMax: 52, mullenObj: 47, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 20, rctObj: 21, rctMax: '-', mullenMin: 50, mulleMax: 60, mullenObj: 55, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 22, rctObj: 23, rctMax: '-', mullenMin: 55, mulleMax: 65, mullenObj: 60, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 25, rctObj: 26, rctMax: '-', mullenMin: 55, mulleMax: 60, mullenObj: 57.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 27, rctObj: 28, rctMax: '-', mullenMin: 60, mulleMax: 65, mullenObj: 62.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 30, rctObj: 32, rctMax: '-', mullenMin: 60, mulleMax: 65, mullenObj: 62.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: 17, tracaoMax: 25, tracaoObj: 21, teorMin: 3, teorMax: 5, teorObj: 4, alongamentoMin: 2, alongamentoMax: 5, alongamentoObj: 3.5, delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 31, rctObj: 33, rctMax: '-', mullenMin: 62, mulleMax: 67, mullenObj: 64.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 190, gramaturaMin: 182, gramaturaMax: 198, rctMin: 32, rctObj: 34, rctMax: '-', mullenMin: 65, mulleMax: 70, mullenObj: 67.5, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: 17, tracaoMax: 27, tracaoObj: 22, teorMin: 3, teorMax: 5, teorObj: 4, alongamentoMin: 2, alongamentoMax: 5, alongamentoObj: 3.5, delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 35, rctObj: 37, rctMax: '-', mullenMin: 70, mulleMax: 80, mullenObj: 75, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, tracaoMin: '', tracaoMax: '', tracaoObj: '', teorMin: '', teorMax: '', teorObj: '', alongamentoMin: '', alongamentoMax: '', alongamentoObj: '', delaminacaoMin: 13, delaminacaoMax: 17, delaminacaoObj: 15, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Duo Size KFT EX",
                subTitle: "90 a 240 g/m²",
                img: "duoSizeKftEx.svg",
                imgheels: 'duo.svg',
                key: "duo-size-kft-ex",
                description: "Alta Performance – Projetado para máquinas de alta velocidade.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Test Liner Exportação é composto por 50% fibra virgem e 50% fibra reciclada, unindo resistência e sustentabilidade. Com gramatura entre 90 e 240 g/m², é indicado para embalagens de alto desempenho no mercado internacional.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Alta Performance – Projetado para máquinas de alta velocidade." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'Mullen' },
                        { head: 'Porosidade' },
                        { head: 'Delaminação' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 90, gramaturaMin: 86, gramaturaMax: 94, rctMin: 10, rctObj: 11, rctMax: '-', mullenMin: 28, mulleMax: 34, mullenObj: 31, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 100, gramaturaMin: 96, gramaturaMax: 104, rctMin: 13, rctObj: 15, rctMax: '-', mullenMin: 32, mulleMax: 38, mullenObj: 35, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 15, rctObj: 17, rctMax: '-', mullenMin: 35, mulleMax: 45, mullenObj: 40, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 19, rctObj: 21, rctMax: '-', mullenMin: 45, mulleMax: 55, mullenObj: 50, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 21, rctObj: 23, rctMax: '-', mullenMin: 55, mulleMax: 65, mullenObj: 60, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 23, rctObj: 25, rctMax: '-', mullenMin: 60, mulleMax: 70, mullenObj: 65, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 26, rctObj: 28, rctMax: '-', mullenMin: 64, mulleMax: 74, mullenObj: 69, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 28, rctObj: 30, rctMax: '-', mullenMin: 68, mulleMax: 78, mullenObj: 73, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 32, rctObj: 34, rctMax: '-', mullenMin: 74, mulleMax: 84, mullenObj: 79, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 190, gramaturaMin: 182, gramaturaMax: 198, rctMin: 33, rctObj: 35, rctMax: '-', mullenMin: 78, mulleMax: 88, mullenObj: 83, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 36, rctObj: 38, rctMax: '-', mullenMin: 80, mulleMax: 90, mullenObj: 85, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 240, gramaturaMin: 231, gramaturaMax: 249, rctMin: 48, rctObj: 50, rctMax: '-', mullenMin: 85, mulleMax: 95, mullenObj: 90, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, delaminacaoMin: 13, delaminacaoMax: 25, delaminacaoObj: 19, feltroMin: 30, feltroMax: 45, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Duo Size White EX",
                subTitle: "120 a 200 g/m²",
                img: "duoSizeWhiteEx.svg",
                imgheels: 'duo.svg',
                key: "duo-size-white-ex",
                description: "Exportação – Projetado para aplicações industriais.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel WTL Size Exportação atende às exigências internacionais, oferecendo alta qualidade para aplicações industriais. Com gramatura entre 120 e 200 g/m², é fabricado conforme a especificação da Guapi Papéis®, garantindo eficiência e durabilidade.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Exportação – Projetado para aplicações industriais." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'rct' },
                        { head: 'Mullen' },
                        { head: 'Porosidade' },
                        { head: 'Alvura' },
                        { head: 'Delaminação' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb Tela' },
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'obj' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 14, rctObj: 15, rctMax: '-', mullenMin: 32, mulleMax: 38, mullenObj: 35, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 15, rctObj: 16, rctMax: '-', mullenMin: 35, mulleMax: 41, mullenObj: 38, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 19, rctObj: 20, rctMax: '-', mullenMin: 38, mulleMax: 44, mullenObj: 41, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 21, rctObj: 22, rctMax: '-', mullenMin: 42, mulleMax: 48, mullenObj: 45, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 25, rctObj: 26, rctMax: '-', mullenMin: 44, mulleMax: 50, mullenObj: 47, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 175, gramaturaMin: 168, gramaturaMax: 182, rctMin: 26, rctObj: 27, rctMax: '-', mullenMin: 46, mulleMax: 52, mullenObj: 49, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 14, delaminacaoMax: 18, delaminacaoObj: 16, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 28, rctObj: 29, rctMax: '-', mullenMin: 60, mulleMax: 66, mullenObj: 63, porosidadeMin: 20, porosidadeMax: 50, porosidadeObj: 35, alvuraMin: 86, alvuraMax: 90, alvuraObj: 88, delaminacaoMin: 15, delaminacaoMax: 19, delaminacaoObj: 17, telaMin: 30, telaMax: 60, feltroMin: 30, feltroMax: 50, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        }
    ],

    commonInfo: {
        qualityStandards: [
            "Testes Obrigatórios (RCT e CMT)",
            "Controle de Qualidade Rigoroso (50 ± 2% UR, 23 ± 1°C)",
            "Certificação FSC® (Cadeia de Custódia: C120902)",
            "Produção sustentável",
            "Garantia de qualidade ISO 9001"
        ],
        certifications: [
            "FSC®",
            "ISO 9001",
            "ISO 14001",
            "REACH"
        ],
        features: [
            "Dupla face de alta qualidade",
            "Otimizado para máquinas de alta velocidade",
            "Resistência superior à umidade",
            "Variedade de gramaturas disponíveis"
        ]
    }
};

export const carbonData = {
    products: [
        {
            card: {
                text: "Carton Tubete HIG",
                subTitle: "132 a 260 g/m²",
                img: "cartonTubeteHig.svg",
                imgheels: 'carton.svg',
                key: "carton-tubate-hig",
                description: "Tubete Higiênico – Projetado para ramo higiênico.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel para Tubete Higiênico é especialmente desenvolvido para a fabricação de tubetes no ramo higiênico. Com gramatura entre 132 e 260 g/m², proporciona resistência e qualidade para processos de conversão eficientes.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Tubete Higiênico – Projetado para ramo higiênico." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'Tração Tr' },
                        { head: 'Traçaõ Lg' },
                        { head: 'Teor de cinzas' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 132, gramaturaMin: 127, gramaturaMax: 137, tracaoTrMin: 3, tracaoTrMax: 7, tracaoTrObj: 5, tracaoLgMin: 7, tracaoLgMax: 11, tracaoLgObj: 9, teorMin: 3, teorMax: 6, teorObj: 4.50, feltroMin: 180, feltroMax: 500, umidadeMin: 4.50, umidadeMax: 6.50 },
                        { gramatura: 150, gramaturaMin: 145, gramaturaMax: 155, tracaoTrMin: 3, tracaoTrMax: 8, tracaoTrObj: 5.5, tracaoLgMin: 9, tracaoLgMax: 13, tracaoLgObj: 11, teorMin: 3, teorMax: 6, teorObj: 4.50, feltroMin: 180, feltroMax: 500, umidadeMin: 4.50, umidadeMax: 6.50 },
                        { gramatura: 180, gramaturaMin: 173, gramaturaMax: 187, tracaoTrMin: 4, tracaoTrMax: 8, tracaoTrObj: 6, tracaoLgMin: 10, tracaoLgMax: 14, tracaoLgObj: 12, teorMin: 3, teorMax: 6, teorObj: 4.50, feltroMin: 180, feltroMax: 500, umidadeMin: 4.50, umidadeMax: 6.50 },
                        { gramatura: 260, gramaturaMin: 250, gramaturaMax: 270, tracaoTrMin: 8, tracaoTrMax: 12, tracaoTrObj: 10, tracaoLgMin: 15, tracaoLgMax: 19, tracaoLgObj: 17, teorMin: 3, teorMax: 6, teorObj: 4.50, feltroMin: 180, feltroMax: 500, umidadeMin: 4.50, umidadeMax: 6.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Carton Tubete REC",
                subTitle: "250 a 400 g/m²",
                img: "cartonTubeteRec.svg",
                imgheels: 'carton.svg',
                key: "carton-tubate-rec",
                description: "Sustentabilidade e Resistência – 100% fibra reciclada.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel para Tubete Reciclado é fabricado com 100% fibra reciclada, garantindo sustentabilidade e alto desempenho. Com gramatura entre 250 e 400 g/m², é uma solução ecológica para indústrias de embalagens.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Sustentabilidade e Resistência – 100% fibra reciclada." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'Mullen' },
                        { head: 'Delaminação' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 250, gramaturaMin: 240, gramaturaMax: 260, mullenMin: 60, mullenMax: 80, mullenObj: 70, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 5.50, umidadeMax: 7.50 },
                        { gramatura: 300, gramaturaMin: 288, gramaturaMax: 312, mullenMin: 60, mullenMax: 80, mullenObj: 70, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 5.50, umidadeMax: 7.50 },
                        { gramatura: 350, gramaturaMin: 336, gramaturaMax: 364, mullenMin: 60, mullenMax: 80, mullenObj: 70, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 5.50, umidadeMax: 7.50 },
                        { gramatura: 400, gramaturaMin: 384, gramaturaMax: 416, mullenMin: 60, mullenMax: 80, mullenObj: 70, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 5.50, umidadeMax: 7.50 },
                    ]
                }
            }
        },
        {
            card: {
                text: "Carton Separador REC",
                subTitle: "250 a 400 g/m²",
                img: "cartonSeparadorRec.svg",
                imgheels: 'carton.svg',
                key: "carton-separador-rec",
                description: "Armazenamento de Produtos – Projetado para ramo cervejeiro.",
            },
            info: {
                title: "Descrição do Produto",
                subTitle: "",
                description: "O Papel Separador Reciclado é ideal para o ramo cervejeiro, proporcionando resistência e praticidade no armazenamento de produtos. Com gramatura entre 250 e 400 g/m², é produzido com 100% fibra reciclada, promovendo sustentabilidade e qualidade.",
                subTitleList: "Principais Caracteríticas",
                list: [
                    { text: "Armazenamento de Produtos – Projetado para ramo cervejeiro." },
                    { text: "Testes Obrigatórios (RCT e CMT) – Garantia de resistência estrutural e qualidade superior." },
                    { text: "Controle de Qualidade Rigoroso – Ensaios realizados em condições padrão de 50 ± 2% de umidade relativa e 23 ± 1°C de temperatura." },
                    { text: "Certificação FSC® – Origem sustentável e rastreável (Cadeia de Custódia: C120902)." },
                    { text: "Resistência Superior – Valores máximos de RCT e CMT servem como referência, podendo ser superados para maior durabilidade." }
                ], tableSpec: {
                    title: "Tabela de Especificações:",
                    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações.",
                    tableHeader: [
                        { head: 'Gramatura' },
                        { head: 'Delaminação' },
                    ],
                    tableHeader2: [
                        { head: 'Cobb feltro' },
                        { head: 'Umidade' },
                    ],
                    tableSubHeader: [
                        { subHaed: 'G/M²' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'obj' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                        { subHaed: 'mín' },
                        { subHaed: 'max' },
                    ],
                    tableData: [
                        { gramatura: 250, gramaturaMin: 240, gramaturaMax: 260, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 300, gramaturaMin: 288, gramaturaMax: 312, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 350, gramaturaMin: 336, gramaturaMax: 364, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 380, gramaturaMin: 363, gramaturaMax: 397, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 7, umidadeMax: 8.50 },
                        { gramatura: 400, gramaturaMin: 384, gramaturaMax: 416, delaminacaoMin: 7, delaminacaoMax: 13, delaminacaoObj: 10, feltroMin: 200, feltroMax: 500, umidadeMin: 7, umidadeMax: 8.50 },
                    ]
                }
            }
        }
    ],

    commonInfo: {
        qualityStandards: [
            "Testes de resistência à compressão",
            "Controle de qualidade dimensional",
            "Certificação FSC® (C120902)",
            "Matéria-prima rastreável",
            "Conformidade com normas internacionais"
        ],
        certifications: [
            "FSC Recycled",
            "ISO 9001",
            "ISO 14001",
            "EMAS"
        ],
        features: [
            "Resistência superior à umidade",
            "Opções personalizadas disponíveis",
            "Produção sustentável",
            "Estoque permanente para entrega rápida"
        ]
    }
};

export const techSheetMock = [
    {
        ID: "735",
        LINHA: "CARTOON",
        PRODUTO: "CARTOON BARRICAS KFT",
        DESCRIÇÃO:
            "Papel 50% fibra virgem e 50% fibra reciclada para o ramo de barricas".toUpperCase(),
        SEGMENTO: "BARRICAS",
        MERCADO: "BARRICAS KRAFT",
        LINK: "1F9XsGyNUmIKP3jopiaKzU5WKvlH6bfx4",
    },
    {
        ID: "737",
        LINHA: "CARTOON",
        PRODUTO: "CARTOON SEPARADOR KFT",
        DESCRIÇÃO:
            "Papel separador 50% fibra virgem e 50% fibra reciclado, ideal para ramo de latas alunínio".toUpperCase(),
        SEGMENTO: "LATAS / GARRAFAS",
        MERCADO: "SEPARADOR KRAFT",
        LINK: "1L34XH8EfqdsPt7GBGe1nFfK8osMLbcnf",
    },

    {
        ID: "736",
        LINHA: "CARTOON",
        PRODUTO: "CARTOON SEPARADOR REC",
        DESCRIÇÃO:
            "Papel separador 100% fibra reciclada, ideal para ramo cervejeiro".toUpperCase(),
        SEGMENTO: "LATAS / GARRAFAS",
        MERCADO: "SEPARADOR",
        LINK: "14L3a3RIb_JTHcXQTxGZ8ilYZBaDtkSF2",
    },

    {
        ID: "710",
        LINHA: "CARTOON",
        PRODUTO: "CARTOON TUBETE HIG",
        DESCRIÇÃO:
            "Papel para tubete, específico para ramo higiênico".toUpperCase(),
        SEGMENTO: "TUBOS / CANTONEIRAS",
        MERCADO: "TUBETE",
        LINK: "164k9JcO88XT47VLpgHzg9iY_6bbZPwQq",
    },

    {
        ID: "728",
        LINHA: "CARTOON",
        PRODUTO: "CARTOON TUBETE REC",
        DESCRIÇÃO: "Papel para tubete com 100% fibra reciclada".toUpperCase(),
        SEGMENTO: "TUBOS / CANTONEIRAS",
        MERCADO: "TUBETE",
        LINK: "1fdfF8HXAWVZZ_aom7iIDqBXN4eyB02hx",
    },

    {
        ID: "743",
        LINHA: "DUO",
        PRODUTO: "DUO SIZE CAPA",
        DESCRIÇÃO:
            "Papel CAPA SIZE com 50% fibra virgem e 50% fibra reciclada".toUpperCase(),
        SEGMENTO: "",
        MERCADO: "",
        LINK: "1IeUXoMzkY6HL1hc-hGxOITiMst8WJXb7",
    },

    {
        ID: "742",
        LINHA: "DUO",
        PRODUTO: "DUO SIZE KFT EX (KRAFT)",
        DESCRIÇÃO:
            "Papel TESTE LINER EXPORTAÇÃO com 50% fibra virgem e 50% fibra reciclada".toUpperCase(),
        SEGMENTO: "EMBALAGENS EXPORTAÇÃO",
        MERCADO: "TESTE LINER KRAFT EXPORTAÇÃO",
        LINK: "1oKfLEeRzkzLo2p0mNTWM3I2AmpPfghQn",
    },

    {
        ID: "734",
        LINHA: "DUO",
        PRODUTO: "DUO SIZE KFT (KRAFT)",
        DESCRIÇÃO:
            "Papel teste liner com 50% fibra reciclada + 50% fibra virgem".toUpperCase(),
        SEGMENTO: "EMBALAGENS",
        MERCADO: "PAPEL TESTE LINER KRAFT",
        LINK: "1BdUSfGVGSlMuy8sSnOzcilY7QKZyENfT",
    },

    {
        ID: "739",
        LINHA: "DUO",
        PRODUTO: "DUO SIZE REC EX",
        DESCRIÇÃO: "Papel teste liner com 100% fibra reciclada".toUpperCase(),
        SEGMENTO: "EMBALAGENS",
        MERCADO: "TESTE LINER",
        LINK: "1jkV9QMn7V049ldlquN3n2P-LCD8C95bD",
    },

    {
        ID: "653",
        LINHA: "DUO",
        PRODUTO: "DUO SIZE REC",
        DESCRIÇÃO: "Papel teste liner com 100% fibra reciclada".toUpperCase(),
        SEGMENTO: "CAPA",
        MERCADO: "TESTE LINER",
        LINK: "1NWltWXdK-v7gH03Q5SH349PEj1fx_Pzp",
    },

    {
        ID: "741",
        LINHA: "DUO",
        PRODUTO: "DUO SIZE WHITE EX",
        DESCRIÇÃO:
            "Papel WTL SIZE EXPORTAÇÃO conforme espeficicação Guapi Papéis".toUpperCase(),
        SEGMENTO: "EMBALAGENS EXPORTAÇÃO",
        MERCADO: "WTL EXPORTAÇÃO",
        LINK: "1u2PH4u5oJOHXlhV6cTq8aTNhVmidN0XI",
    },

    {
        ID: "733",
        LINHA: "DUO",
        PRODUTO: "DUO SIZE WHITE",
        DESCRIÇÃO:
            "Papel WTL size conforme espeficicação guapi papéis".toUpperCase(),
        SEGMENTO: "EMBALAGENS EXPORTAÇÃO, CAPA",
        MERCADO: "WTL",
        LINK: "1cnBak9U2Zs8IcBYQgoiIesw_3RIkFLeJ",
    },

    {
        ID: "738",
        LINHA: "UNI ",
        PRODUTO: "UNI COMUM NE",
        DESCRIÇÃO:
            "Papel MIOLO COMUM conforme espeficicação Guapi Papéis.".toUpperCase(),
        SEGMENTO: "EMBALAGENS",
        MERCADO: "MIOLO SIZE",
        LINK: "11xW5fG10EyRTUtaCb3nAAEdfig2scCvB",
    },

    {
        ID: "723",
        LINHA: "UNI ",
        PRODUTO: "UNI SIZE 50",
        DESCRIÇÃO:
            "Papel miolo size cobb de 50 a 100, ideal para onduladeiras de alta performace".toUpperCase(),
        SEGMENTO: "EMBALAGENS",
        MERCADO: "MIOLO SIZE",
        LINK: "1lNPPaIpEJ6Apt2qiHmvV_6jz08GecJcB",
    },

    {
        ID: "731",
        LINHA: "UNI ",
        PRODUTO: "UNI SIZE ES 30",
        DESCRIÇÃO:
            "Papel miolo size especial cobb de 30 a 50, ideal para ramo frigorífico".toUpperCase(),
        SEGMENTO: "FRIGORÍFICO",
        MERCADO: "MIOLO SIZE",
        LINK: "1RuoeRJSD99H2SLOP7tItTeXzQXSaVlPl",
    },

    {
        ID: "722",
        LINHA: "UNI ",
        PRODUTO: "UNI SIZE ES 50",
        DESCRIÇÃO:
            "Papel miolo size especial cobb 50 a 100, ideal para onduladeiras de alta performace".toUpperCase(),
        SEGMENTO: "EMBALAGENS ESPECIAL",
        MERCADO: "MIOLO SIZE",
        LINK: "16WBcFy2i7m2B_xoWvoA_YMCsRsLmReJs",
    },

    {
        ID: "715",
        LINHA: "UNI ",
        PRODUTO: "UNI SIZE ES NE",
        DESCRIÇÃO:
            "Papel miolo size conforme espeficicação Guapi Papéis".toUpperCase(),
        SEGMENTO: "EMBALAGENS",
        MERCADO: "MIOLO SIZE",
        LINK: "18qUj3vDx5htVYVA5bkqR2-oix7ym_DTR",
    },

    {
        ID: "740",
        LINHA: "UNI ",
        PRODUTO: "UNI SIZE EX",
        DESCRIÇÃO:
            "Papel MIOLO SIZE ESPECIAL EXPORTAÇÃO conforme espeficicação Guapi Papéis".toUpperCase(),
        SEGMENTO: "EMBALAGENS",
        MERCADO: "MIOLO SIZE",
        LINK: "1yJgZz9XCtrqJh5RkNyue6gIvh9F9o-8C",
    },

    {
        ID: "620",
        LINHA: "UNI ",
        PRODUTO: "UNI SIZE NE",
        DESCRIÇÃO:
            "Papel miolo size conforme espeficicação Guapi Papéis".toUpperCase(),
        SEGMENTO: "EMBALAGENS",
        MERCADO: "MIOLO SIZE",
        LINK: "1L0e6eKTGZGXtqy0EiBTvU2ZNWImdclkA",
    },

    {
        ID: "730",
        LINHA: "UNI ",
        PRODUTO: "UNI SIZE RU 30",
        DESCRIÇÃO:
            "Papel miolo size RU e cobb 30 a 50, ideal para ramo frigorífico".toUpperCase(),
        SEGMENTO: "FRIGORÍFICO",
        MERCADO: "MIOLO SIZE",
        LINK: "14FilNA6Eckw2HLj2E6rmGmI1XC7NwrKw",
    },

    {
        ID: "732",
        LINHA: "UNI ",
        PRODUTO: "UNI SIZE RU NE",
        DESCRIÇÃO:
            "Papel miolo size RU conforme especificação Guapi Papéis".toUpperCase(),
        SEGMENTO: "EMBALAGENS",
        MERCADO: "MIOLO SIZE",
        LINK: "1_iOjsdfnefW7-nwMWVxsJGFAukuwiXmg",
    },

    {
        ID: "",
        LINHA: "",
        PRODUTO: "FICHARIO DIGITAL",
        DESCRIÇÃO: "Todas as fichas técnicas ".toUpperCase(),
        SEGMENTO: "",
        MERCADO: "",
        LINK: "1HctMtgRvm46mnst77birk-wzbUUSbFrg",
    },
];


export const uniSizeTable = {
    title: "Tabela de Especificações:",
    description: "A tabela apresenta as especificações técnicas do papel, incluindo resistência, absorção e umidade, garantindo sua qualidade e desempenho ideal para diversas aplicações."
}


export const tableHeader = [
    { head: 'Gramatura' },
    { head: 'Rct' },
    { head: 'Cmt' },
    { head: 'Tração umida' },
]

export const tableHeader2 = [
    { head: 'Cobb feltro' },
    { head: 'Cobb tela' },
    { head: 'Umidade' },
    { head: 'SCT trans' },
]

export const tableSubHeader = [
    { subHaed: 'G/M²' },
    { subHaed: 'mín' },
    { subHaed: 'max' },
    { subHaed: 'mín' },
    { subHaed: 'obj' },
    { subHaed: 'max' },
    { subHaed: 'mín' },
    { subHaed: 'obj' },
    { subHaed: 'max' },
    { subHaed: 'mín' },
    { subHaed: 'max' },
    { subHaed: 'obj' },
    { subHaed: 'mín' },
    { subHaed: 'max' },
    { subHaed: 'mín' },
    { subHaed: 'max' },
    { subHaed: 'mín' },
    { subHaed: 'max' },
    { subHaed: 'mín' },
    { subHaed: 'max' },
]

export const tableData = [
    { gramatura: 110, gramaturaMin: 106, gramaturaMax: 114, rctMin: 16, rctObj: 17, rctMax: '-', cmtMin: 26, cmtObj: 27, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: 50, telaMax: 100, umidadeMin: 7, umidadeMax: 8.50, sctMin: 2.40, sctMax: '-' },
    { gramatura: 120, gramaturaMin: 115, gramaturaMax: 125, rctMin: 19, rctObj: 20, rctMax: '-', cmtMin: 30, cmtObj: 31, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: 2.80, sctMax: '-' },
    { gramatura: 130, gramaturaMin: 125, gramaturaMax: 135, rctMin: 21, rctObj: 22, rctMax: '-', cmtMin: 33, cmtObj: 34, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: 50, telaMax: 100, umidadeMin: 7, umidadeMax: 8.50, sctMin: 2.90, sctMax: '-' },
    { gramatura: 135, gramaturaMin: 130, gramaturaMax: 140, rctMin: 22, rctObj: 23, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
    { gramatura: 140, gramaturaMin: 134, gramaturaMax: 146, rctMin: 22, rctObj: 24, rctMax: '-', cmtMin: 34, cmtObj: 35, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
    { gramatura: 150, gramaturaMin: 144, gramaturaMax: 156, rctMin: 26, rctObj: 27, rctMax: '-', cmtMin: 35, cmtObj: 36, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
    { gramatura: 160, gramaturaMin: 153, gramaturaMax: 167, rctMin: 29, rctObj: 30, rctMax: '-', cmtMin: 37, cmtObj: 38, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: 3.80, sctMax: '-' },
    { gramatura: 165, gramaturaMin: 158, gramaturaMax: 172, rctMin: 30, rctObj: 31, rctMax: '-', cmtMin: 38, cmtObj: 39, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
    { gramatura: 170, gramaturaMin: 163, gramaturaMax: 177, rctMin: 31, rctObj: 32, rctMax: '-', cmtMin: 40, cmtObj: 42, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
    { gramatura: 180, gramaturaMin: 172, gramaturaMax: 188, rctMin: 32, rctObj: 33, rctMax: '-', cmtMin: 45, cmtObj: 47, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
    { gramatura: 200, gramaturaMin: 192, gramaturaMax: 208, rctMin: 36, rctObj: 37, rctMax: '-', cmtMin: 45, cmtObj: 48, cmtMax: '-', tracaoMin: 6, tracaoMax: 16, tracaoObj: 11, feltroMin: 50, feltroMax: 100, telaMin: '-', telaMax: '-', umidadeMin: 7, umidadeMax: 8.50, sctMin: '-', sctMax: '-' },
]