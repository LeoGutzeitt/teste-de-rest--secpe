# teste-de-rest--secpe

Estrutura básica em React para integração com WordPress REST API (Headless WordPress).

## 🚀 Recursos

- **Vite** - Build tool moderna e rápida
- **React 19** - Biblioteca UI mais recente
- **Hooks personalizados** - `usePosts`, `usePost`, `usePages`, `useCategories`, `useTags`, `useSearch`
- **Service layer** - Camada de API organizada e reutilizável
- **Configuração flexível** - Suporte para WordPress.com e self-hosted
- **Componentes de exemplo** - PostList, CategoryList, SearchBar

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Um site WordPress (WordPress.com ou self-hosted)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/LeoGutzeitt/teste-de-rest--secpe.git
cd teste-de-rest--secpe
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a API do WordPress:

Crie um arquivo `.env` na raiz do projeto (ou copie `.env.example`):
```bash
cp .env.example .env
```

Edite o arquivo `.env` e defina a URL da sua API WordPress:

**Para WordPress.com:**
```
VITE_WP_API_URL=https://public-api.wordpress.com/wp/v2/sites/SEU_SITE_ID
```

**Para WordPress self-hosted:**
```
VITE_WP_API_URL=https://seu-dominio.com/wp-json/wp/v2
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── PostList.jsx     # Lista de posts com featured images
│   ├── CategoryList.jsx # Lista de categorias
│   └── SearchBar.jsx    # Barra de busca
├── hooks/               # Custom hooks
│   └── useWordPress.js  # Hooks para buscar dados do WordPress
├── services/            # Camada de serviço API
│   └── wpApi.js         # Funções para consumir WordPress REST API
├── App.jsx              # Componente principal
├── App.css              # Estilos do App
├── config.js            # Configuração da API
├── main.jsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🔌 API WordPress REST

### Endpoints Suportados

O service layer (`src/services/wpApi.js`) inclui funções para:

- **Posts**: `getPosts()`, `getPostById(id)`
- **Páginas**: `getPages()`, `getPageById(id)`
- **Categorias**: `getCategories()`
- **Tags**: `getTags()`
- **Mídia**: `getMedia()`
- **Usuários**: `getUsers()`
- **Busca**: `searchContent(term)`

### Custom Hooks

Os hooks estão em `src/hooks/useWordPress.js`:

```jsx
import { usePosts, useCategories, useSearch } from './hooks/useWordPress';

function MeuComponente() {
  const { data: posts, loading, error } = usePosts({ per_page: 10 });
  const { data: categories } = useCategories();
  const { data: searchResults, search } = useSearch('termo de busca');
  
  // ...
}
```

## 🔐 Autenticação (Opcional)

Para sites WordPress privados, você pode precisar de autenticação.

### Application Passwords (WordPress 5.6+)

1. No admin do WordPress, vá em Usuários → Profile
2. Em "Application Passwords", crie uma nova senha
3. Use as credenciais no formato Base64

### JWT Authentication

Para JWT, você precisará:
1. Instalar plugin JWT Authentication no WordPress
2. Configurar o CORS no WordPress
3. Adicionar o token nos headers da requisição

## 🌐 CORS

Se encontrar erros de CORS, configure seu WordPress para permitir requisições do seu domínio React.

Adicione ao `wp-config.php`:
```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
```

Ou use um plugin como "WP CORS".

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
Conecte seu repositório GitHub no Netlify e configure:
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 📚 Recursos Adicionais

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.