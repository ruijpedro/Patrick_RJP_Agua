# Patrick RJP_Agua V1.3

Aplicação Web, Android e Windows. As nove páginas, os visuais e os nomes de campos foram extraídos do PBIX original. **O PBIX é um relatório ligado a um dataset remoto; os registos do modelo não são recuperáveis diretamente deste ficheiro.** A app não apresenta valores inventados.

## Como integrar os valores reais

No Power BI exportar as tabelas **Contadores Primários**, **Faturação mensal** e **Instalações RepowerIP** como CSV, mantendo os cabeçalhos originais. Renomear cada CSV com o nome da tabela correspondente e importar no ecrã inicial da app. Os dados permanecem na sessão local, não são enviados para servidor. Os gráficos atuais representam agregações por categoria, não uma réplica perfeita de todos os visuais e medidas DAX do Power BI.

## Compilar

`npm install && npm run build` (Web)

GitHub Actions: Android APK, Windows EXE e GitHub Pages. Para compilar Android localmente: `npm run build && npx cap add android && npx cap sync android`.

**Nota:** A integração em tempo real com o dataset Power BI exige API, permissões e autenticação Microsoft. Não incluída nesta versão.
