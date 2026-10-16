# Patrick RJP_Agua V1.1

Protótipo de 9 páginas baseado na estrutura do relatório Power BI fornecido. **Os dados e visuais do Power BI ainda não estão integrados.**

## Compilar pelo GitHub
1. Criar repositório e carregar **o conteúdo desta pasta** na raiz, incluindo `.github/workflows`.
2. Em **Actions**, selecionar **Android APK** > **Run workflow**. No fim, descarregar o artefacto APK (versão de teste, assinatura debug).
3. Em **Actions**, selecionar **Windows EXE** > **Run workflow**. Descarregar o artefacto EXE (instalador NSIS, não assinado).
4. Para publicar a WebApp, em **Settings > Pages**, escolher **Source: GitHub Actions** e executar **WebApp GitHub Pages**.

## Desenvolvimento local
Requer Node.js 22+.
```
npm install
npm run dev
npm run build
```

Android local (requer Android SDK e Java 21):
```
npx cap add android
npm run android:sync
cd android && ./gradlew assembleDebug
```

Windows local (preferencialmente em Windows):
```
npm run windows:package
```

## Notas
- Não inclui APK ou EXE já compilados; o GitHub Actions gera-os.
- O APK debug serve para instalação/testes. Para distribuição final é necessária assinatura de lançamento.
- O instalador Windows não é assinado e pode mostrar avisos SmartScreen.
- iOS poderá ser acrescentado com Capacitor e compilação em macOS/Xcode.
- Não publicar o ficheiro `.pbix` ou credenciais num repositório público sem autorização.


## V1.2 — Correção Android SDK
Corrigido o workflow Android: `setup-android@v3` deixa de solicitar o pacote obsoleto `tools`, instalando explicitamente `platform-tools`, `platforms;android-35` e `build-tools;35.0.0`. O APK continua a ser produzido em modo debug no GitHub Actions. A compilação ainda precisa de validação no GitHub.
