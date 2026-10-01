
import './App.css'

const aprendizados = [
  {
    numero: '01',
    icone: '</>',
    titulo: 'Lógica de programação',
    descricao: 'Desenvolva o raciocínio lógico e aprenda a criar algoritmos para resolver problemas.',
    categoria: 'FUNDAMENTOS',
  },
  {
    numero: '02',
    icone: '◈',
    titulo: 'Desenvolvimento web',
    descricao: 'Aprenda a construir páginas e aplicações para a internet.',
    categoria: 'WEB',
  },
  {
    numero: '03',
    icone: '▤',
    titulo: 'Frontend',
    descricao: 'Crie interfaces organizadas, interativas e acessíveis para os usuários.',
    categoria: 'INTERFACES',
  },
  {
    numero: '04',
    icone: '{ }',
    titulo: 'Backend',
    descricao: 'Desenvolva a lógica, as funcionalidades e o processamento por trás das aplicações.',
    categoria: 'SERVIDORES',
  },
  {
    numero: '05',
    icone: '▦',
    titulo: 'Banco de dados',
    descricao: 'Aprenda a armazenar, consultar e organizar informações de maneira estruturada.',
    categoria: 'DADOS',
  },
  {
    numero: '06',
    icone: '⌘',
    titulo: 'APIs e versionamento',
    descricao: 'Conheça a comunicação entre sistemas e utilize Git e GitHub para controlar versões do código.',
    categoria: 'FERRAMENTAS',
  },
]

const tecnologias = [
  { nome: 'HTML', simbolo: '5' },
  { nome: 'CSS', simbolo: '#' },
  { nome: 'JavaScript', simbolo: 'JS' },
  { nome: 'React', simbolo: '⚛' },
  { nome: 'Node.js', simbolo: 'N' },
  { nome: 'SQL', simbolo: 'DB' },
  { nome: 'Git', simbolo: '⌘' },
  { nome: 'GitHub', simbolo: 'GH' },
]

const carreiras = [
  {
    numero: '01',
    titulo: 'Desenvolvimento Frontend',
    descricao: 'Criação das interfaces e dos elementos visuais de aplicações.',
  },
  {
    numero: '02',
    titulo: 'Desenvolvimento Backend',
    descricao: 'Construção da lógica e do funcionamento interno dos sistemas.',
  },
  {
    numero: '03',
    titulo: 'Desenvolvimento Full Stack',
    descricao: 'Atuação tanto nas interfaces quanto na parte interna das aplicações.',
  },
  {
    numero: '04',
    titulo: 'Desenvolvimento de aplicações',
    descricao: 'Criação de soluções digitais para diferentes dispositivos e necessidades.',
  },
  {
    numero: '05',
    titulo: 'Banco de dados',
    descricao: 'Organização, consulta e manutenção de informações.',
  },
  {
    numero: '06',
    titulo: 'Suporte e manutenção',
    descricao: 'Identificação de falhas e manutenção de sistemas existentes.',
  },
]

const projetos = [
  {
    numero: '01',
    titulo: 'Cadastro de clientes',
    descricao: 'Sistema para registrar, consultar e atualizar informações de clientes.',
    tags: ['CRUD', 'Banco de dados'],
    tipo: 'clientes',
    visual: 'UI',
  },
  {
    numero: '02',
    titulo: 'Controle de estoque',
    descricao: 'Aplicação para acompanhar produtos, quantidades e movimentações.',
    tags: ['Gestão', 'Dados'],
    tipo: 'estoque',
    visual: 'BOX',
  },
  {
    numero: '03',
    titulo: 'Agendamentos',
    descricao: 'Plataforma para organizar horários, compromissos e atendimentos.',
    tags: ['Organização', 'Web'],
    tipo: 'agenda',
    visual: '09:00',
  },
  {
    numero: '04',
    titulo: 'Loja virtual',
    descricao: 'Site para apresentar produtos e organizar uma experiência de compra.',
    tags: ['E-commerce', 'Frontend'],
    tipo: 'loja',
    visual: 'SHOP',
  },
  {
    numero: '05',
    titulo: 'Dashboard administrativo',
    descricao: 'Painel para acompanhar indicadores e visualizar informações importantes.',
    tags: ['Indicadores', 'Dados'],
    tipo: 'dashboard',
    visual: 'DATA',
  },
  {
    numero: '06',
    titulo: 'Aplicativo de tarefas',
    descricao: 'Ferramenta para registrar atividades e acompanhar tarefas do dia a dia.',
    tags: ['Produtividade', 'Aplicação'],
    tipo: 'tarefas',
    visual: 'TASKS',
  },
]

function IdentificacaoSecao({ numero, titulo }) {
  return (
    <div className="secao-identificacao">
      <span className="identificacao-numero">{numero} /</span>
      <span>{titulo}</span>
      <span className="identificacao-linha" />
    </div>
  )
}

function App() {
  return (
    <>
      <header className="cabecalho">
        <nav className="navegacao" aria-label="Navegação principal">
          <a href="#inicio" className="logo" aria-label="SENAI — início">
            <span className="logo-destaque">&lt;/&gt;</span>

            <span className="logo-marca">
              <strong>SENAI</strong>
              <span>Desenvolvimento de Sistemas</span>
            </span>
          </a>

          <div className="menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">O curso</a>
            <a href="#aprendizado">Aprendizado</a>
            <a href="#tecnologias">Tecnologias</a>
            <a href="#mercado">Carreiras</a>
            <a href="#projetos">Projetos</a>
          </div>

          <a href="#chamada" className="menu-cta">
            Explorar <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-conteudo">
            <div className="etiqueta">
              <span className="etiqueta-ponto" />
              CURSO TÉCNICO <span>•</span> SENAI
            </div>

            <p className="hero-sobretitulo">
              IDEIAS QUE SE TRANSFORMAM EM TECNOLOGIA
            </p>

            <h1>
              Transforme ideias em
              <span className="texto-neon"> sistemas.</span>
            </h1>

            <p className="hero-descricao">
              Descubra o universo da programação, desenvolva soluções
              criativas e construa seu futuro na tecnologia por meio
              do Desenvolvimento de Sistemas.
            </p>

            <div className="hero-botoes">
              <a href="#sobre" className="botao-principal">
                Conheça o curso <span>→</span>
              </a>

              <a href="#projetos" className="botao-secundario">
                Explorar projetos <span>↗</span>
              </a>
            </div>

            <div className="hero-informacoes">
              <div>
                <strong>01<span>.</span></strong>
                <span>Aprenda</span>
              </div>
              <div>
                <strong>02<span>.</span></strong>
                <span>Desenvolva</span>
              </div>
              <div>
                <strong>03<span>.</span></strong>
                <span>Inove</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ilustração de código">
            <div className="visual-orbita orbita-um" />
            <div className="visual-orbita orbita-dois" />
            <div className="visual-fundo" />

            <div className="codigo-card">
              <div className="codigo-topo">
                <div className="codigo-bolinhas">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="codigo-arquivo">meu-projeto.jsx</span>
                <span className="codigo-status">● ONLINE</span>
              </div>

              <div className="codigo-conteudo">
                <p>
                  <span className="codigo-numero">01</span>
                  <span className="codigo-roxo">function</span>{' '}
                  <span className="codigo-azul">inovar</span>() {'{'}
                </p>
                <p>
                  <span className="codigo-numero">02</span>
                  &nbsp;&nbsp;<span className="codigo-roxo">const</span>{' '}
                  ideia = <span className="codigo-verde">"futuro"</span>;
                </p>
                <p>
                  <span className="codigo-numero">03</span>
                  &nbsp;&nbsp;<span className="codigo-roxo">return</span>{' '}
                  <span className="codigo-rosa">criar</span>(ideia);
                </p>
                <p>
                  <span className="codigo-numero">04</span>
                  {'}'}
                </p>
                <p className="codigo-comentario">
                  <span className="codigo-numero">05</span>
                  // O próximo passo começa aqui.
                </p>
                <p>
                  <span className="codigo-numero">06</span>
                  <span className="codigo-azul">inovar</span>();
                  <span className="cursor-codigo">▋</span>
                </p>
              </div>

              <div className="codigo-rodape">
                <span><span className="status-ponto" /> Todos os sistemas prontos</span>
                <span>JSX</span>
              </div>
            </div>

            <div className="visual-flutuante">
              <span className="flutuante-icone">&lt;/&gt;</span>
              <div>
                <strong>Ideias em código</strong>
                <span>Criatividade sem limites</span>
              </div>
              <span className="flutuante-check">✓</span>
            </div>

            <div className="visual-legenda">
              <span>01 — CRIAR</span>
              <span>02 — TESTAR</span>
              <span>03 — EVOLUIR</span>
            </div>
          </div>

          <a href="#sobre" className="hero-scroll">
            <span /> ROLE PARA EXPLORAR
          </a>
        </section>

        <section id="sobre" className="secao sobre">
          <IdentificacaoSecao numero="01" titulo="SOBRE O CURSO" />

          <div className="sobre-conteudo">
            <div className="sobre-titulo">
              <span className="subtitulo">CONHEÇA A ÁREA</span>
              <h2>
                A tecnologia começa com uma
                <span className="texto-neon"> ideia.</span>
              </h2>

              <div className="sobre-detalhe">
                <span className="detalhe-linha" />
                <span>DO PROBLEMA À SOLUÇÃO</span>
              </div>
            </div>

            <div className="sobre-texto">
              <p>
                Desenvolvimento de Sistemas é a área da tecnologia
                dedicada à criação, aos testes e à manutenção de
                softwares, sites, aplicativos e outros sistemas digitais.
              </p>

              <p>
                O curso técnico tem como objetivo desenvolver conhecimentos
                de programação, banco de dados e desenvolvimento de
                aplicações, preparando o aluno para criar soluções que
                atendam às necessidades de pessoas e empresas.
              </p>

              <p>
                O profissional dessa área transforma problemas em soluções
                digitais, trabalhando em diferentes etapas do desenvolvimento
                de um sistema.
              </p>

              <a href="#aprendizado" className="link-texto">
                Descubra o que você pode aprender <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="aprendizado" className="secao aprendizado">
          <IdentificacaoSecao numero="02" titulo="APRENDIZADO" />

          <div className="secao-cabecalho">
            <div>
              <span className="subtitulo">DO PRIMEIRO CÓDIGO AO SISTEMA</span>
              <h2>
                Conhecimento que
                <span className="texto-neon"> vira prática.</span>
              </h2>
            </div>

            <p>
              Explore conhecimentos utilizados na criação de sistemas
              e aplicações.
            </p>
          </div>

          <div className="cards">
            {aprendizados.map((item) => (
              <article className="card" key={item.numero}>
                <div className="card-topo">
                  <span className="card-numero">{item.numero}</span>
                  <span className="card-icone">{item.icone}</span>
                </div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
                <span className="card-categoria">{item.categoria}</span>
                <span className="card-seta">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="tecnologias" className="secao tecnologias">
          <IdentificacaoSecao numero="03" titulo="TECNOLOGIAS" />

          <div className="tecnologias-conteudo">
            <div className="tecnologias-texto">
              <span className="subtitulo">FERRAMENTAS DA ÁREA</span>
              <h2>
                Ferramentas para
                <span className="texto-neon"> tirar ideias do papel.</span>
              </h2>
              <p>
                Diferentes linguagens e ferramentas participam da construção
                de sistemas. Cada tecnologia possui características e
                aplicações próprias.
              </p>
            </div>

            <div className="tecnologias-lista">
              {tecnologias.map((tecnologia) => (
                <div className="tecnologia-item" key={tecnologia.nome}>
                  <span className="tecnologia-simbolo">
                    {tecnologia.simbolo}
                  </span>
                  <span>{tecnologia.nome}</span>
                  <span className="tecnologia-seta">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mercado" className="secao mercado">
          <IdentificacaoSecao numero="04" titulo="CARREIRAS" />

          <div className="secao-cabecalho">
            <div>
              <span className="subtitulo">SEU CONHECIMENTO, NOVOS CAMINHOS</span>
              <h2>
                Diferentes áreas.
                <span className="texto-neon"> Muitas possibilidades.</span>
              </h2>
            </div>

            <p>
              Os conhecimentos em desenvolvimento de sistemas podem ser
              aplicados em diferentes funções da área de tecnologia.
            </p>
          </div>

          <div className="carreiras-lista">
            {carreiras.map((carreira) => (
              <article className="carreira-item" key={carreira.numero}>
                <span className="carreira-numero">{carreira.numero}</span>
                <div className="carreira-conteudo">
                  <h3>{carreira.titulo}</h3>
                  <p>{carreira.descricao}</p>
                </div>
                <span className="carreira-seta">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="projetos" className="secao projetos">
          <IdentificacaoSecao numero="05" titulo="PROJETOS" />

          <div className="secao-cabecalho">
            <div>
              <span className="subtitulo">DO PLANEJAMENTO À EXECUÇÃO</span>
              <h2>
                O que você pode
                <span className="texto-neon"> construir?</span>
              </h2>
            </div>

            <p>
              Um sistema pode facilitar tarefas, organizar informações
              e resolver problemas do cotidiano.
            </p>
          </div>

          <div className="projetos-grid">
            {projetos.map((projeto) => (
              <article className="projeto-card" key={projeto.numero}>
                <div className="projeto-topo">
                  <span>SISTEMA {projeto.numero}</span>
                  <span className="projeto-seta">↗</span>
                </div>

                <div className={`projeto-ilustracao ilustracao-${projeto.tipo}`}>
                  <div className="projeto-visual">
                    {projeto.tipo === 'clientes' && (
                      <div className="mini-janela">
                        <div className="mini-janela-topo">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="mini-perfil">
                          <span className="mini-avatar">U</span>
                          <div>
                            <span className="mini-linha mini-linha-longa" />
                            <span className="mini-linha" />
                          </div>
                        </div>
                        <div className="mini-bloco" />
                        <div className="mini-bloco" />
                        <div className="mini-bloco" />
                      </div>
                    )}

                    {projeto.tipo === 'estoque' && (
                      <div className="estoque-visual">
                        <span>INVENTÁRIO</span>
                        <div className="estoque-caixas">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="estoque-linha" />
                        <div className="estoque-linha estoque-linha-curta" />
                      </div>
                    )}

                    {projeto.tipo === 'agenda' && (
                      <div className="agenda-quadro">
                        <div className="agenda-cabecalho">
                          <span>AGENDA</span>
                          <span>•••</span>
                        </div>
                        <div className="agenda-dias">
                          <span>SEG</span>
                          <span>TER</span>
                          <span>QUA</span>
                        </div>
                        <div className="agenda-horarios">
                          <span>09:00</span>
                          <span>10:30</span>
                          <span>14:00</span>
                        </div>
                      </div>
                    )}

                    {projeto.tipo === 'loja' && (
                      <div className="loja-visual">
                        <span className="loja-titulo">SHOP<span>+</span></span>
                        <div className="loja-produtos">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="loja-linha" />
                      </div>
                    )}

                    {projeto.tipo === 'dashboard' && (
                      <div className="dashboard-visual">
                        <div className="dashboard-cabecalho">
                          <span>VISÃO GERAL</span>
                          <span>↗ 12%</span>
                        </div>
                        <div className="dashboard-grafico">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    )}

                    {projeto.tipo === 'tarefas' && (
                      <div className="tarefas-visual">
                        <span>MINHAS TAREFAS</span>
                        <div><i>✓</i><span /></div>
                        <div><i>✓</i><span /></div>
                        <div><i>+</i><span /></div>
                      </div>
                    )}
                  </div>

                  <span className="projeto-indice">{projeto.visual}</span>
                </div>

                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>

                <div className="projeto-tags">
                  {projeto.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="chamada" className="chamada">
          <div className="chamada-elemento">&lt;/&gt;</div>
          <span className="subtitulo">O PRÓXIMO PASSO É SEU</span>

          <h2>
            Seu futuro na tecnologia
            <span className="texto-neon"> pode começar aqui.</span>
          </h2>

          <p>
            Conheça o curso Técnico em Desenvolvimento de Sistemas e
            descubra novas possibilidades para transformar suas ideias
            em realidade.
          </p>

          <a href="#sobre" className="botao-principal">
            Explore o curso <span>→</span>
          </a>
        </section>
      </main>

      <footer className="rodape">
        <a href="#inicio" className="logo rodape-logo">
          <span className="logo-destaque">&lt;/&gt;</span>
          <span className="logo-marca">
            <strong>SENAI</strong>
            <span>Desenvolvimento de Sistemas</span>
          </span>
        </a>

        <p>Projeto acadêmico desenvolvido no SENAI.</p>

        <div className="rodape-info">
          <span>Hadassa Alves</span>
          <span>2026</span>
        </div>

        <a href="#inicio" className="voltar-topo">
          Voltar ao topo <span>↑</span>
        </a>
      </footer>
    </>
  )
}

export default App