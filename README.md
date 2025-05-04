# 📚 MiniBlog - Mundo Psicanalítico

## 🏛️ Contextualização

Projeto desenvolvido como parte de uma avaliação acadêmica para a disciplina de Desenvolvimento Web 3. O objetivo foi criar um blog minimalista com funcionalidades modernas utilizando **React** e **Firebase**, incluindo
autenticação com **e-mail/senha** e **login com Google**

## 📌 Funcionalidades Principais

✅ Cadastro de novos usuários
✅ Login com e-mail e senha
✅ Login com conta Google (OAuth)
✅ Validação de senhas e mensagens de erros claras
✅ Logout do sistema
✅ Layout responsivo com CSS Modules
✅ Estrutura modular de pastas e hooks customizados
✅ Deploy com Firebase Hosting

## 🚀 Tecnologias Utilizadas

-[React.js] (https://react.dev/) -[Firebase Authentication] (https://firebase.google.com/products/auth) -[Firebase Firestore] (https://firebase.google.com/products/firestore) -[Vite] (https://vitejs.dev/) (para build e desenvolvimento local) -[CSS Modules] (https://github.com/css-modules/css-modules) -[GitHub Actions] (https://github.com/features/actions) (para CI/CD)

## 🔐 Autenticação com Firebase

O projeto utiliza o serviço de autenticação do Firebase com:

- **Cadastro de usuário** com `createUserWithEmailAndPassword`
- **Atualização do perfil** com `updateProfile`
- **Login com e-mail/senha** com `signInWithEmailAndPassword`
- **Login com Google** via `signInWithPopup` e `GoogleAuthProvider`

Além disso, foram implementados **tratamentos de erro personalizados** para feedback do usuário, como:

- Email já cadastrado
- Senha inválida
- Usuário não encontrado
- Senha incorreta

## 🧠 Estruturação do projeto

📁 src
├── 📁assets
├── 📁components
├── 📁contexts
├── 📁firebase
├── 📁hooks
├── 📁pages

## 🎨 Estilo e Responsividade

- Utilização de **CSS Modules** para encapsulamento de estilos.
- Header responsivo com menu adaptativo para mobile.
- Feedback visual com botões desabilitados durante carregamentos e mensagens de erros dinâmicas.

## 📦 Deploy com Firebase Hosting

O deploy foi realizado no **Firebase Hosting**, com build automatizado pela ferramenta **Vite**.

### Comandos utilizados:

# Instalação de dependências

npm install

# Build da aplicação

npm run build

# Login no Firebase CLI

firebase login

# Inicialização do Firebase Hosting

firebase init

# Deploy final

firebase deploy

✅ Status do Projeto

🚧 Concluído com sucesso
Todos os requisistos foram implementados e testados. O projeto está funcional e disponível para deploy

👨‍💻 Autor

Jeronimo Barbieri Junior
Github: jeronimobarbieri

📜 Licença

Este projeto é de uso educacional e livre para fins de aprendizado
