# 🎨 Sentinela DigiArtes — Web I

Projeto web desenvolvido como trabalho prático para a disciplina de **Programação Web I** do curso de **Bacharelado em Sistemas de Informação (IFMG Campus Sabará)**, sob orientação do Prof. Aluizio Barbosa de Oliveira Neto.

O projeto consiste no site estático responsivo para a escola imaginária de artes digitais **Sentinela DigiArtes**.

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica, acessibilidade e elementos de multimédia nativos (`<video>`, `<form>`).
- **CSS3:** Layouts responsivos (*Flexbox* e *Grid*), transições de visualização e regras de *media queries*.
- **JavaScript (ES6+):** Manipulação de interatividade do DOM, controlo do menu responsivo e validação do formulário.

---

## 📄 Estrutura das Páginas e Requisitos

1. **Página Inicial (`index.html`)**
   - Cabeçalho com logótipo e menu navegável (`[Escola]`, `[Equipe]`, `[Método]`, `[Contato]`).
   - Banner com navegação/transição automática a cada 5 segundos ou por setas.
   - Bloco central com atalhos de navegação para as restantes páginas.

2. **A Escola (`escola.html`)**
   - Apresentação da instituição e grelha de fotos em tons de cinza com legendas.
   - **Efeito Zoom Dinâmico:** Expansão da imagem destacada com visualização centralizada e sobreposta (*modal/lightbox*).

3. **Equipa (`equipe.html`)**
   - Blocos organizados com fotos e perfis descritivos dos professores e colaboradores.

4. **Método (`metodo.html`)**
   - Demonstração em vídeo com controlos do leitor e textos explicativos sobre a metodologia.

5. **Contacto (`contato.html`)**
   - Informações de contacto (telefone, e-mail e morada).
   - Mapa interativo integrado (OpenStreetMap).
   - Formulário de contacto validado via JavaScript com envio configurado via método `POST`.

---

## 🛠️ Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone git@github.com:igor93araujo/escola_de_artes_acea_web1.git