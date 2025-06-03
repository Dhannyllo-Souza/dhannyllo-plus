document.addEventListener('DOMContentLoaded', () => {
    // === Elementos do DOM ===
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const authModal = document.getElementById('auth-modal');
    const closeModalBtn = document.querySelector('#auth-modal .close-button');
    const modalTitle = document.getElementById('modalTitle');
    const signupFields = document.getElementById('signupFields');
    const loginFields = document.getElementById('loginFields');
    const submitAuthFormBtn = document.getElementById('submitAuthForm');
    const toggleAuthModeText = document.getElementById('toggleAuthMode');
    const authForm = document.getElementById('authForm');




    const signupNameInput = document.getElementById('signupName');
    const signupEmailInput = document.getElementById('signupEmail');
    const signupPasswordInput = document.getElementById('signupPassword');
    const signupConfirmPasswordInput = document.getElementById('signupConfirmPassword');
    const loginEmailInput = document.getElementById('loginEmail');
    const loginPasswordInput = document.getElementById('loginPassword');




    const profileMenu = document.getElementById('profileMenu');
    const profilePic = document.getElementById('profilePic');
    const viewProfileBtn = document.getElementById('viewProfile');
    const myPlanBtn = document.getElementById('myPlan');
    const logoutBtn = document.getElementById('logoutBtn');




    const platformContent = document.getElementById('platform-content');
    const heroSection = document.getElementById('home');
    const plansSection = document.getElementById('plans');
    const exploreNowBtn = document.getElementById('exploreNow');
    const viewPlansHomeBtn = document.getElementById('viewPlansHome');




    const plansContainer = document.getElementById('plansContainer');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');




    const navLinksContainer = document.querySelector('.nav-links');
    const userActionsContainer = document.querySelector('.user-actions');
    const hamburgerMenu = document.querySelector('.hamburger-menu');








    // === Variáveis de Estado ===
    let isLoginMode = true; // true para login, false para cadastro
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    let userPlan = null;




    // === Dados Mockup (simulando um backend) ===
    const allPlans = [
        {
            id: 'trial',
            name: 'Teste Gratuito',
            price: 'R$0',
            duration: '/7 dias',
            description: 'Experimente a plataforma completa sem compromisso.',
            features: [
                'Acesso limitado a todo o conteúdo',
                '1 tela',
                'Ferramentas de IA básicas',
                'Suporte padrão'
            ],
            access: 0.10, // Representa 10% de acesso ao conteúdo pago
            screens: 1,
            booksCourses: 0,
            isTrial: true
        },
        {
            id: 'basic',
            name: 'Básico',
            price: 'R$29,90',
            duration: '/mês',
            description: 'Ideal para quem busca entretenimento e conhecimento essencial.',
            features: [
                'Acesso total a streaming',
                '2 telas simultâneas',
                '1 livro/curso gratuito por mês',
                'IA padrão',
                'Suporte prioritário'
            ],
            access: 'full',
            screens: 2,
            booksCourses: 1
        },
        {
            id: 'premium',
            name: 'Premium',
            price: 'R$59,90',
            duration: '/mês',
            description: 'Experiência completa com todos os recursos e benefícios exclusivos.',
            features: [
                'Acesso total a todo o conteúdo',
                '4 telas simultâneas',
                '3 livros/cursos gratuitos por mês',
                'IA avançada',
                'Suporte 24/7',
                'Conteúdo exclusivo'
            ],
            access: 'full',
            screens: 4,
            booksCourses: 3,
            highlight: true // Para destacar no display
        }
    ];




    const users = JSON.parse(localStorage.getItem('users')) || [];




    const contentData = {
        streaming: [
            { id: 1, title: 'Filme Épico de Aventura', description: 'Uma jornada emocionante através de terras desconhecidas.', image: 'https://via.placeholder.com/300x180/6366f1/ffffff?text=Filme+1' },
            { id: 2, title: 'Série de Drama Intenso', description: 'Reviravoltas que prenderão sua atenção do início ao fim.', image: 'https://via.placeholder.com/300x180/eab308/ffffff?text=Série+1' },
            { id: 3, title: 'Documentário Fascinante', description: 'Explore os mistérios do universo e da natureza.', image: 'https://via.placeholder.com/300x180/22c55e/ffffff?text=Doc+1' },
            { id: 4, title: 'Música Relaxante para Estudar', description: 'Sons ambientes para concentração e bem-estar.', image: 'https://via.placeholder.com/300x180/ef4444/ffffff?text=Audio+1' }
        ],
        games: [
            { id: 1, title: 'Aventura Mágica RPG', description: 'Embarque em um mundo de fantasia e magia.', image: 'https://via.placeholder.com/300x180/1e293b/ffffff?text=Jogo+RPG' },
            { id: 2, title: 'Corrida Urbana 3D', description: 'Velocidade e adrenalina nas ruas da cidade.', image: 'https://via.placeholder.com/300x180/334155/ffffff?text=Jogo+Corrida' }
        ],
        courses: [
            { id: 1, title: 'Programação Web do Zero', description: 'Aprenda a criar seus próprios sites e aplicativos.', image: 'https://via.placeholder.com/300x180/6366f1/ffffff?text=Curso+Web' },
            { id: 2, title: 'Masterclass de Fotografia', description: 'Domine a arte da fotografia com técnicas avançadas.', image: 'https://via.placeholder.com/300x180/eab308/ffffff?text=Curso+Foto' },
            { id: 3, title: 'Livro: O Segredo da Mente Milionária', description: 'Descubra os princípios para a liberdade financeira.', image: 'https://via.placeholder.com/300x180/22c55e/ffffff?text=Livro+Mente' }
        ]
    };








    // === Funções de Autenticação e Interface ===




    function showModal(mode) {
        authModal.style.display = 'flex'; // Use flex para centralizar
        isLoginMode = mode === 'login';
        updateModalContent();
    }




    function hideModal() {
        authModal.style.display = 'none';
        authForm.reset(); // Limpa o formulário
    }




    function updateModalContent() {
        if (isLoginMode) {
            modalTitle.textContent = 'Fazer Login';
            signupFields.style.display = 'none';
            loginFields.style.display = 'block';
            submitAuthFormBtn.textContent = 'Entrar';
            toggleAuthModeText.innerHTML = 'Não tem uma conta? <a href="#" id="toggleToSignup">Cadastre-se</a>';
        } else {
            modalTitle.textContent = 'Cadastre-se';
            signupFields.style.display = 'block';
            loginFields.style.display = 'none';
            submitAuthFormBtn.textContent = 'Criar Conta';
            toggleAuthModeText.innerHTML = 'Já tem uma conta? <a href="#" id="toggleToLogin">Fazer Login</a>';
        }
        // Adiciona event listeners para os links de toggle
        document.getElementById('toggleToSignup')?.addEventListener('click', (e) => {
            e.preventDefault();
            isLoginMode = false;
            updateModalContent();
        });
        document.getElementById('toggleToLogin')?.addEventListener('click', (e) => {
            e.preventDefault();
            isLoginMode = true;
            updateModalContent();
        });
    }




    function handleAuth(event) {
        event.preventDefault();




        if (isLoginMode) {
            const email = loginEmailInput.value;
            const password = loginPasswordInput.value;
            const foundUser = users.find(u => u.email === email && u.password === password);




            if (foundUser) {
                currentUser = foundUser;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUIForLoggedInUser();
                hideModal();
                alert(`Bem-vindo(a) de volta, ${currentUser.name}!`);
                showPlatformContent();
            } else {
                alert('Email ou senha inválidos.');
            }
        } else {
            // Cadastro
            const name = signupNameInput.value.trim();
            const email = signupEmailInput.value.trim();
            const password = signupPasswordInput.value.trim();
            const confirmPassword = signupConfirmPasswordInput.value.trim();




            if (!name || !email || !password || !confirmPassword) {
                alert('Por favor, preencha todos os campos.');
                return;
            }




            if (password !== confirmPassword) {
                alert('As senhas não coincidem.');
                return;
            }




            if (users.some(u => u.email === email)) {
                alert('Este email já está cadastrado.');
                return;
            }




            // Selecionar o plano de teste por padrão ao cadastrar
            const trialPlan = allPlans.find(p => p.id === 'trial');
            if (!trialPlan) {
                alert('Erro: Plano de teste não encontrado.');
                return;
            }




            const newUser = {
                id: users.length + 1, // ID simples
                name: name,
                email: email,
                password: password,
                plan: trialPlan.id, // Define o plano como 'trial'
                signupDate: new Date().toISOString()
            };




            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));




            updateUIForLoggedInUser();
            hideModal();
            alert(`Cadastro realizado com sucesso, ${newUser.name}! Você está no plano de Teste Gratuito.`);
            showPlatformContent();
        }
    }




    function updateUIForLoggedInUser() {
        if (currentUser) {
            loginBtn.style.display = 'none';
            signupBtn.style.display = 'none';
            profileMenu.style.display = 'block';
            // Atualizar imagem de perfil se tiver uma URL no currentUser
            // profilePic.src = currentUser.profilePicUrl || 'https://via.placeholder.com/30x30';
            userPlan = allPlans.find(p => p.id === currentUser.plan);




            // Ao logar, esconder seções iniciais e mostrar plataforma
            heroSection.style.display = 'none';
            plansSection.style.display = 'none';
            // Certifica-se que features e contact também estão ocultos se usuário logado
            document.getElementById('features').style.display = 'none';
            document.getElementById('contact').style.display = 'none';


            platformContent.style.display = 'block';
            loadPlatformContent(); // Carrega o conteúdo das abas
            // Ativa a primeira aba da plataforma por padrão
            document.querySelector('.tab-button').click();


        } else {
            loginBtn.style.display = 'block';
            signupBtn.style.display = 'block';
            profileMenu.style.display = 'none';
            // Se o usuário não está logado, mostra as seções hero, features e planos
            heroSection.style.display = 'flex';
            plansSection.style.display = 'block';
            document.getElementById('features').style.display = 'block'; // Mostra features
            document.getElementById('contact').style.display = 'block'; // Mostra contact
            platformContent.style.display = 'none';
        }
        // Garante que o menu hambúrguer esteja fechado e com os estilos corretos
        navLinksContainer.classList.remove('active');
        userActionsContainer.classList.remove('active');
    }




    function showPlatformContent() {
        heroSection.style.display = 'none';
        plansSection.style.display = 'none';
        document.getElementById('features').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
        platformContent.style.display = 'block';
        // Remove a classe 'active' de todos os nav-links e ativa o primeiro tab-button
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        // Ativa a primeira aba por padrão
        const firstTabButton = document.querySelector('.tab-button');
        if (firstTabButton) {
            firstTabButton.click(); // Simula o clique na primeira aba
        }
    }




    function logout() {
        currentUser = null;
        userPlan = null;
        localStorage.removeItem('currentUser');
        updateUIForLoggedInUser();
        alert('Você foi desconectado.');
        // Redireciona para a página inicial (seção Hero, Features e Planos)
        heroSection.style.display = 'flex';
        plansSection.style.display = 'block';
        document.getElementById('features').style.display = 'block';
        document.getElementById('contact').style.display = 'block';
        platformContent.style.display = 'none';
        // Reinicia a ativação do link de navegação para "Início"
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector('.nav-link[href="#home"]').classList.add('active');
        // Fecha o menu hambúrguer se estiver aberto
        navLinksContainer.classList.remove('active');
        userActionsContainer.classList.remove('active');
    }




    function renderPlans() {
        plansContainer.innerHTML = ''; // Limpa antes de renderizar
        allPlans.forEach(plan => {
            const card = document.createElement('div');
            card.classList.add('plan-card');
            if (plan.highlight) {
                card.classList.add('highlight');
            }




            let featuresHtml = '';
            plan.features.forEach(feature => {
                featuresHtml += `<li><i class="fas fa-check-circle"></i> ${feature}</li>`;
            });




            const buttonText = currentUser ? (currentUser.plan === plan.id ? 'Plano Atual' : 'Acessar') : (plan.isTrial ? 'Iniciar Teste Gratuito' : 'Comprar');
            const buttonClass = plan.isTrial || !currentUser ? 'btn-primary' : 'btn-secondary';
            const isDisabled = currentUser && currentUser.plan === plan.id;




            card.innerHTML = `
                <h3>${plan.name}</h3>
                <div class="price">${plan.price}<span>${plan.duration}</span></div>
                <p class="description">${plan.description}</p>
                <ul>
                    ${featuresHtml}
                </ul>
                <button class="btn ${buttonClass}" data-plan-id="${plan.id}" ${isDisabled ? 'disabled' : ''}>${buttonText}</button>
            `;
            plansContainer.appendChild(card);
        });




        // Adiciona event listeners aos botões de compra/acesso dos planos
        plansContainer.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const planId = e.target.dataset.planId;
                const selectedPlan = allPlans.find(p => p.id === planId);




                if (!currentUser) {
                    showModal('signup'); // Força cadastro se não logado
                    alert(`Por favor, cadastre-se para ${selectedPlan.isTrial ? 'iniciar seu teste' : 'comprar o plano ' + selectedPlan.name}.`);
                } else if (currentUser.plan === selectedPlan.id) {
                    alert(`Você já está no plano ${selectedPlan.name}.`);
                    showPlatformContent(); // Já está no plano, mostra a plataforma
                } else {
                    // Lógica para "comprar" ou "atualizar" plano
                    // Aqui você implementaria a lógica de pagamento/alteração de plano
                    currentUser.plan = selectedPlan.id;
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    userPlan = selectedPlan;
                    alert(`Parabéns! Você agora está no plano ${selectedPlan.name}.`);
                    updateUIForLoggedInUser();
                    showPlatformContent();
                }
            });
        });
    }




    function loadPlatformContent() {
        // Carrega conteúdo para Streaming
        const streamingContainer = document.getElementById('streamingContent');
        if (streamingContainer) {
            streamingContainer.innerHTML = '';
            contentData.streaming.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('content-card');
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-info">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <button class="btn btn-primary">Assistir</button>
                    </div>
                `;
                streamingContainer.appendChild(card);
            });
        }




        // Carrega conteúdo para Jogos
        const gamesContainer = document.getElementById('gamesContent');
        if (gamesContainer) {
            gamesContainer.innerHTML = '';
            contentData.games.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('content-card');
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-info">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <button class="btn btn-primary">Jogar</button>
                    </div>
                `;
                gamesContainer.appendChild(card);
            });
        }




        // Carrega conteúdo para Cursos & Livros
        const coursesBooksContainer = document.getElementById('coursesBooksContent');
        if (coursesBooksContainer) {
            coursesBooksContainer.innerHTML = '';
            contentData.courses.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('content-card');
                card.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-info">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                        <button class="btn btn-primary">${item.title.includes('Livro') ? 'Ler' : 'Acessar Curso'}</button>
                    </div>
                `;
                coursesBooksContainer.appendChild(card);
            });
        }
    }








    // === Event Listeners ===




    // Abrir Modal de Login/Cadastro
    loginBtn.addEventListener('click', () => showModal('login'));
    signupBtn.addEventListener('click', () => showModal('signup'));
    closeModalBtn.addEventListener('click', hideModal);




    // Fechar modal ao clicar fora
    window.addEventListener('click', (event) => {
        if (event.target === authModal) {
            hideModal();
        }
    });




    // Lidar com o envio do formulário de autenticação
    authForm.addEventListener('submit', handleAuth);




    // Menu de Perfil (Dropdown)
    profileMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que o clique no menu feche-o imediatamente
        profileMenu.classList.toggle('show');
    });




    // Fechar dropdown do perfil ao clicar fora
    window.addEventListener('click', (event) => {
        if (!event.target.closest('.profile-menu') && profileMenu.classList.contains('show')) {
            profileMenu.classList.remove('show');
        }
    });




    // Funções do Menu de Perfil
    viewProfileBtn.addEventListener('click', () => {
        if (currentUser) {
            alert(`Nome: ${currentUser.name}\nEmail: ${currentUser.email}\nPlano: ${userPlan ? userPlan.name : 'Nenhum'}`);
        }
    });




    myPlanBtn.addEventListener('click', () => {
        if (currentUser && userPlan) {
            let planInfo = `Seu Plano: ${userPlan.name}\n`;
            planInfo += `Acesso: ${typeof userPlan.access === 'number' ? (userPlan.access * 100).toFixed(0) + '%' : userPlan.access.toUpperCase()}\n`;
            planInfo += `Telas: ${userPlan.screens}\n`;
            if (userPlan.booksCourses > 0) {
                planInfo += `Livros/Cursos Gratuitos por Mês: ${userPlan.booksCourses}\n`;
            }
            if (currentUser.plan === 'trial') {
                const signupDate = new Date(currentUser.signupDate);
                const sevenDaysLater = new Date(signupDate);
                sevenDaysLater.setDate(signupDate.getDate() + 7);
                const now = new Date();
                const timeLeft = Math.ceil((sevenDaysLater - now) / (1000 * 60 * 60 * 24));
                planInfo += `Dias Restantes no Teste: ${timeLeft > 0 ? timeLeft : 0} dias.\n`;
                if (timeLeft <= 0) {
                    planInfo += `Seu teste expirou. Considere assinar um plano pago!`;
                }
            }
            alert(planInfo);
        } else {
            alert('Você não tem um plano ativo ou não está logado.');
        }
    });




    logoutBtn.addEventListener('click', logout);




    // Navegação Principal e Ativação de Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Se o link for para uma seção na mesma página
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                // Remove active de todos os links de navegação
                document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
                // Adiciona active ao link clicado
                this.classList.add('active');


                const targetSection = document.getElementById(targetId.substring(1));
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });


                    // Esconde/mostra seções com base na navegação
                    if (currentUser) { // Se o usuário estiver logado
                        if (targetId === '#home' || targetId === '#features' || targetId === '#plans' || targetId === '#contact') {
                            // Ao navegar para seções iniciais/marketing, esconde a plataforma
                            platformContent.style.display = 'none';
                            heroSection.style.display = (targetId === '#home') ? 'flex' : 'none';
                            document.getElementById('features').style.display = (targetId === '#features') ? 'block' : 'none';
                            plansSection.style.display = (targetId === '#plans') ? 'block' : 'none';
                            document.getElementById('contact').style.display = (targetId === '#contact') ? 'block' : 'none';
                        } else {
                            // Ao navegar para abas da plataforma, mostra a plataforma
                            showPlatformContent();
                        }
                    } else { // Se o usuário NÃO estiver logado
                         // Sempre mostra as seções de marketing/página inicial
                        heroSection.style.display = (targetId === '#home') ? 'flex' : 'none';
                        document.getElementById('features').style.display = (targetId === '#features') ? 'block' : 'none';
                        plansSection.style.display = (targetId === '#plans') ? 'block' : 'none';
                        document.getElementById('contact').style.display = (targetId === '#contact') ? 'block' : 'none';
                        platformContent.style.display = 'none'; // Plataforma sempre oculta se não logado
                    }
                }
            }
             // Fechar o menu hambúrguer após clicar em um link
             navLinksContainer.classList.remove('active');
             userActionsContainer.classList.remove('active');
        });
    });




    // Botões da Seção Hero
    exploreNowBtn.addEventListener('click', () => {
        if (currentUser) {
            showPlatformContent();
        } else {
            showModal('login'); // Se não estiver logado, pede para fazer login
        }
    });




    viewPlansHomeBtn.addEventListener('click', () => {
        document.getElementById('plans').scrollIntoView({ behavior: 'smooth' });
        // Ativa o link de planos na navegação
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        document.querySelector('.nav-link[href="#plans"]').classList.add('active');
    });




    // Lógica das Abas de Conteúdo
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');




            tabContents.forEach(content => content.classList.remove('active'));
            const targetTab = document.getElementById(`tab-${button.dataset.tab}`);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });




    // Menu Hambúrguer (Mobile)
    hamburgerMenu.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        userActionsContainer.classList.toggle('active'); // Sempre alterna user-actions junto
    });




    // --- Inicialização ---
    updateUIForLoggedInUser(); // Verifica se o usuário já está logado
    renderPlans(); // Renderiza os planos na página
});