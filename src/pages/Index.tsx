
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Loader Animation
    const loader = document.querySelector('.loader');
    setTimeout(() => {
      loader?.classList.add('loaded');
    }, 1500);

    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    const revealAnimation = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealAnimation);
    revealAnimation();

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle?.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav?.classList.toggle('active');
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        (cursor as HTMLElement).style.left = e.clientX + 'px';
        (cursor as HTMLElement).style.top = e.clientY + 'px';
      }
    });
    
    document.addEventListener('mousedown', () => {
      cursor?.classList.add('click');
      setTimeout(() => {
        cursor?.classList.remove('click');
      }, 500);
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId || '');
        if (target) {
          // Close mobile menu if open
          menuToggle?.classList.remove('active');
          mainNav?.classList.remove('active');
          
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', revealAnimation);
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <div class="cursor"></div>
      <div class="loader">
          <div class="loader-content">
              <div class="logo-animation">
                  <div class="logo-part"></div>
              </div>
              <p>Carregando...</p>
          </div>
      </div>

      <header class="header">
          <div class="header-container">
              <div class="logo">
                  <span class="logo-icon"></span>
                  <h1>Power BI</h1>
              </div>
              <nav class="main-nav">
                  <ul>
                      <li><a href="#sobre" class="nav-link">Sobre</a></li>
                      <li><a href="#recursos" class="nav-link">Recursos</a></li>
                      <li><a href="#visualizacoes" class="nav-link">Visualizações</a></li>
                      <li><a href="#integracao" class="nav-link">Integração</a></li>
                      <li><a href="#contato" class="nav-link button-primary">Contato</a></li>
                  </ul>
              </nav>
              <button class="mobile-menu-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
              </button>
          </div>
      </header>

      <main>
          <section class="hero">
              <div class="container">
                  <div class="hero-content">
                      <div class="badge">Business Intelligence</div>
                      <h1>Power BI no Bradesco</h1>
                      <p>Transforme dados em insights valiosos para decisões estratégicas</p>
                      <div class="hero-buttons">
                          <a href="#saiba-mais" class="button-primary">Saiba Mais</a>
                          <a href="#demonstracao" class="button-secondary">Ver Demonstração</a>
                      </div>
                  </div>
                  <div class="hero-image">
                      <div class="hero-image-inner">
                          <div class="floating-elements">
                              <div class="floating-element fe-1"></div>
                              <div class="floating-element fe-2"></div>
                              <div class="floating-element fe-3"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="hero-wave"></div>
          </section>

          <section id="sobre" class="section-what">
              <div class="container">
                  <div class="section-header reveal-animation">
                      <div class="badge">Análise de Dados</div>
                      <h2>O que é o Power BI?</h2>
                      <p>O Power BI é uma plataforma de análise de negócios que oferece visualizações interativas e recursos de business intelligence, permitindo que usuários criem dashboards, relatórios e análises de dados de forma autônoma.</p>
                  </div>
                  
                  <div class="feature-grid">
                      <div class="feature-card reveal-animation">
                          <div class="feature-icon icon-visualize"></div>
                          <h3>Visualização de Dados</h3>
                          <p>Crie visualizações impressionantes com mais de 100 tipos de gráficos e mapas para comunicar seus dados de forma eficaz.</p>
                      </div>
                      <div class="feature-card reveal-animation" data-delay="200">
                          <div class="feature-icon icon-transform"></div>
                          <h3>Transformação de Dados</h3>
                          <p>Conecte e transforme dados de diversas fontes com ferramentas intuitivas de ETL integradas.</p>
                      </div>
                      <div class="feature-card reveal-animation" data-delay="400">
                          <div class="feature-icon icon-share"></div>
                          <h3>Compartilhamento Seguro</h3>
                          <p>Compartilhe insights com sua equipe e garantia controle de acesso em qualquer dispositivo.</p>
                      </div>
                  </div>
              </div>
          </section>

          <section id="recursos" class="section-versions">
              <div class="container">
                  <div class="section-header reveal-animation">
                      <div class="badge">Ferramentas</div>
                      <h2>Principais recursos do Power BI</h2>
                      <p>Conheça os recursos que fazem do Power BI a ferramenta ideal para análise de dados no Bradesco.</p>
                  </div>

                  <div class="version-cards">
                      <div class="version-card reveal-animation">
                          <div class="version-number">1</div>
                          <h3>Power BI Desktop</h3>
                          <p>Ferramenta gratuita para criação de relatórios e visualizações complexas na sua máquina local.</p>
                          <ul class="version-features">
                              <li>Modelagem avançada de dados</li>
                              <li>Linguagem DAX para cálculos</li>
                              <li>Mais de 100 visualizações</li>
                          </ul>
                      </div>
                      <div class="version-card reveal-animation" data-delay="300">
                          <div class="version-number">2</div>
                          <h3>Power BI Service</h3>
                          <p>Plataforma na nuvem para compartilhamento, colaboração e publicação de relatórios e dashboards.</p>
                          <ul class="version-features">
                              <li>Compartilhamento em tempo real</li>
                              <li>Workspaces colaborativos</li>
                              <li>Apps e portais personalizados</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>

          <section id="visualizacoes" class="section-how">
              <div class="container">
                  <div class="section-header reveal-animation">
                      <div class="badge">Dashboards</div>
                      <h2>Visualizações Poderosas</h2>
                      <p>Explore diferentes tipos de visualizações para apresentar seus dados de forma impactante e revelar insights ocultos.</p>
                  </div>

                  <div class="process-steps">
                      <div class="process-step reveal-animation">
                          <div class="step-icon icon-charts"></div>
                          <div class="step-content">
                              <h3>Gráficos e Tabelas</h3>
                              <p>Utilize gráficos de colunas, linhas, pizza, áreas, tabelas dinâmicas e muito mais para suas análises.</p>
                          </div>
                      </div>
                      <div class="process-step reveal-animation" data-delay="200">
                          <div class="step-icon icon-maps"></div>
                          <div class="step-content">
                              <h3>Mapas Geográficos</h3>
                              <p>Visualize dados geoespaciais com mapas de calor, mapas de bolhas e mapas coropletas.</p>
                          </div>
                      </div>
                      <div class="process-step reveal-animation" data-delay="400">
                          <div class="step-icon icon-kpi"></div>
                          <div class="step-content">
                              <h3>KPIs e Scorecards</h3>
                              <p>Monitore indicadores-chave de desempenho com visualizações específicas para acompanhamento de metas.</p>
                          </div>
                      </div>
                  </div>

                  <div class="example-box reveal-animation">
                      <h4>Exemplo de dashboard no Bradesco:</h4>
                      <p>"Dashboard de análise de investimentos que combina gráficos de desempenho histórico, mapas de distribuição geográfica de clientes e indicadores de risco em tempo real."</p>
                  </div>
              </div>
          </section>

          <section id="integracao" class="section-integration">
              <div class="container">
                  <div class="section-header reveal-animation">
                      <div class="badge">Conectividade</div>
                      <h2>Integração do Power BI com Sistemas do Bradesco</h2>
                      <p>O Power BI conecta-se facilmente com os diversos sistemas e fontes de dados utilizados pelo Bradesco.</p>
                  </div>
                  
                  <div class="integration-grid">
                      <div class="integration-card reveal-animation">
                          <div class="integration-icon icon-database"></div>
                          <h3>Bancos de Dados</h3>
                          <p>SQL Server, Oracle, MySQL e outras bases de dados corporativas.</p>
                      </div>
                      <div class="integration-card reveal-animation" data-delay="200">
                          <div class="integration-icon icon-excel"></div>
                          <h3>Microsoft Excel</h3>
                          <p>Importação direta de planilhas Excel e modelos existentes.</p>
                      </div>
                      <div class="integration-card reveal-animation" data-delay="400">
                          <div class="integration-icon icon-api"></div>
                          <h3>APIs e Serviços Web</h3>
                          <p>Conexão com APIs Rest, serviços em nuvem e sistemas internos.</p>
                      </div>
                  </div>
              </div>
          </section>

          <section class="section-benefits">
              <div class="container">
                  <div class="section-header reveal-animation">
                      <div class="badge">Vantagens</div>
                      <h2>Por Que Usar Power BI no Bradesco?</h2>
                      <p>O Power BI pode revolucionar a forma como o Bradesco utiliza seus dados para tomar decisões estratégicas.</p>
                  </div>
                  
                  <div class="benefits-wrapper">
                      <div class="benefits-list">
                          <div class="benefit-item reveal-animation">
                              <div class="benefit-icon"></div>
                              <div class="benefit-content">
                                  <h3>Tomada de decisão baseada em dados</h3>
                                  <p>Decisões mais inteligentes com análises em tempo real.</p>
                              </div>
                          </div>
                          <div class="benefit-item reveal-animation" data-delay="150">
                              <div class="benefit-icon"></div>
                              <div class="benefit-content">
                                  <h3>Visão 360° do negócio</h3>
                                  <p>Painéis unificados com dados de diferentes departamentos.</p>
                              </div>
                          </div>
                          <div class="benefit-item reveal-animation" data-delay="300">
                              <div class="benefit-icon"></div>
                              <div class="benefit-content">
                                  <h3>Self-service BI</h3>
                                  <p>Autonomia para os usuários criarem suas próprias análises.</p>
                              </div>
                          </div>
                          <div class="benefit-item reveal-animation" data-delay="450">
                              <div class="benefit-icon"></div>
                              <div class="benefit-content">
                                  <h3>Inteligência Artificial</h3>
                                  <p>Insights automáticos e análises preditivas com IA integrada.</p>
                              </div>
                          </div>
                      </div>
                      <div class="benefits-image reveal-animation" data-delay="300">
                          <div class="benefits-image-inner">
                              <div class="benefits-shapes">
                                  <div class="shape shape-1"></div>
                                  <div class="shape shape-2"></div>
                                  <div class="shape shape-3"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          
          <section id="contato" class="section-contact">
              <div class="container">
                  <div class="contact-wrapper">
                      <div class="contact-content reveal-animation">
                          <div class="badge">Entre em Contato</div>
                          <h2>Transforme Dados em Insights com Power BI</h2>
                          <p>Descubra como implementar soluções de Business Intelligence para potencializar a análise de dados no Bradesco.</p>
                          <div class="contact-info">
                              <div class="contact-item">
                                  <div class="contact-icon icon-email"></div>
                                  <p>contato@powerbi.com</p>
                              </div>
                              <div class="contact-item">
                                  <div class="contact-icon icon-phone"></div>
                                  <p>(11) 1234-5678</p>
                              </div>
                          </div>
                      </div>
                      <div class="contact-form-container reveal-animation" data-delay="200">
                          <form class="contact-form">
                              <div class="form-group">
                                  <label for="name">Nome</label>
                                  <input type="text" id="name" placeholder="Seu nome completo">
                              </div>
                              <div class="form-group">
                                  <label for="email">E-mail</label>
                                  <input type="email" id="email" placeholder="seu@email.com">
                              </div>
                              <div class="form-group">
                                  <label for="message">Mensagem</label>
                                  <textarea id="message" placeholder="Como podemos ajudar?"></textarea>
                              </div>
                              <button type="submit" class="button-primary">Enviar Mensagem</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </main>

      <footer class="footer">
          <div class="container">
              <div class="footer-top">
                  <div class="footer-logo">
                      <span class="logo-icon"></span>
                      <h3>Power BI</h3>
                  </div>
                  <div class="footer-navigation">
                      <div class="footer-nav-column">
                          <h4>Sobre</h4>
                          <ul>
                              <li><a href="#sobre">O que é</a></li>
                              <li><a href="#recursos">Recursos</a></li>
                              <li><a href="#visualizacoes">Visualizações</a></li>
                          </ul>
                      </div>
                      <div class="footer-nav-column">
                          <h4>Recursos</h4>
                          <ul>
                              <li><a href="#">Documentação</a></li>
                              <li><a href="#">Tutoriais</a></li>
                              <li><a href="#">FAQ</a></li>
                          </ul>
                      </div>
                      <div class="footer-nav-column">
                          <h4>Contato</h4>
                          <ul>
                              <li><a href="#contato">Suporte</a></li>
                              <li><a href="#contato">Vendas</a></li>
                              <li><a href="#contato">Parceiros</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="footer-bottom">
                  <p>&copy; 2023 Power BI | Microsoft Corporation. Todos os direitos reservados.</p>
                  <div class="footer-social">
                      <a href="#" class="social-icon icon-linkedin"></a>
                      <a href="#" class="social-icon icon-twitter"></a>
                      <a href="#" class="social-icon icon-facebook"></a>
                  </div>
              </div>
          </div>
      </footer>
    ` }} />
  );
};

export default Index;
