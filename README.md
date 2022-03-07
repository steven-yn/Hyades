# Hyades ( 현재 개발중, Front-End )

**개발환경 및 스택** : **yarn 3.x PnP + CRA + Typescript + Redux + Jest**

### **주의 사항**

중간중간 변경사항이 생길수 있으니 clone, pull 받기전 `git fetch` `git status` 확인 부탁드립니다
패키지 설치 가급적 지양 해주시고, 설치가 요구되면 저에게 (steven-yn, 윤성연) 말씀해주세요 !
현재 설정으로 컴파일된 타입스크립트 파일은 noEmit 설정을 적용해서 .js 파일이 emit되지 않습니다.
bundle 될때는 정상적으로 js 파일로 변환되고 있습니다.

## 버전확인

> 1. Node.js : 16.14 LTS
> 2. npm : 8.5.1
> 3. yarn (global) : 1.22.15
> 4. yarn (project) : 3.2.0 (preview : 3.1.1)
> 5. Typescript (project): 4.6.2

clone 전 : 3번 항목까지 `yarn -v` 등 버전 확인 해주세요 ! \
clone 후 : .../Hyades 경로에서 `yarn -v` 입력시 3.2.0 버전이 나타나는지 확인 해주세요 !

## VSCode Extension (Required) - 필수설치 항목

> 1. ESLint (Microsoft), 18M :
>    VSC 에 컴파일 규칙을 추가시키는 eslint 를 사용할수 있게 해줌.
> 2. ZipFS (Maël Nison), 49K :
>    VSC 에 yarn 2.x, 3.x zip 아카이브 파일시스템을 사용할수 있게 해줌.
> 3. Prettier (Prettier), 19M :
>    .prettierrc 파일을 사용할수 있게해줌. 코드 포맷터
> 4. vscode-styled-components (Styled-Components), 86K :
>    vsc가 스타일드 컴포넌트 코드를 인식할수 있게 해줌.

## VSCode Extension (Optional) - 선택적 항목

> 1. Material Icon Theme (Philipp Kief), 11M :
>    왼쪽 탐색기창 폴더 아이콘 테마.
> 2. Korean(사용법) Language Pack for Visual Studio Code (Microsoft), 126K :
>    편집기 한글패치
> 3. Auto Close Tag (Jun Han), 6.5M :
>    html 태그 작성시 닫는 태그를 자동생성.
> 4. Auto Rename Tag (Jun Han), 8.2M :
>    html 태그 쌍을 동시에 Rename 하게 해줌.
> 5. Live Server (Ritwick Dey), 19M :
>    html을 개발서버에서 실행시켜줌. 저장시 새로고침 지원.
> 6. Bracket Pair Colorizer (CoenraadS), 7.6M :
>    편집기가 코드에 색 입히는것을 도와줌.

## 프로젝트 실행

#### **.../Hyades/hyades-front 로 이동해서 바로 yarn start**

Progress $ yarn install Successfully done and React is ready to run your codes! \
이라는 문구와 함께 서버 연동이 잘 되는지 확인하시면 됩니다

#### zero-install 로 실행이 되지 않을때

> 1. .../Hyades/hyades-front 경로로 이동해서 `yarn install` 명령어 실행
> 2. yarn start 해보고, 그래도 되지 않으면 아래항목 진행.
> 3. `yarn dlx @yarnpkg/sdks vscode` 실행
> 4. 아래로 내려서 Solution 에서 언급한 문제가 있는지 확인
> 5. `yarn start` 실행

## 프로젝트 폴더 구조

```
Hyades
   |
   |= hyades-front
           |
           |= .vscode  <- vsc 편집기 및 익스텐션과 프로젝트 사이에 필요한 설정들
           |
           |= .yarn
           |    |= cache <- zip 아카이브
           |    |= releases <- yarn 이 3.2.0 으로 동작하게 해줌
           |    |= sdks <- 편집기를 실질적으로 종속성 패키지와 연동해줌
           |          |= eslint <- VSC Ext ESLint 관련 (매우중요)
           |          |= typescript <- VSC Ext ZipFS 와 TS 를 연결해줌 (매우중요)
           |
           |= build <- 번들링된 js 파일과 html 파일 등 빌드된 파일
           |= config <- 리액트 프로젝트에 관련된 모든 config 파일들
           |= (node_modules) <- 기존에 정상적인 경로가 아니어서 vsc가 자동생성 해낸 캐시들.
           |                    현재는 완벽하게 pnp 방식으로 돌아가기때문에 없어도 됩니다.
           |= public <- 퍼블리싱 관련된 요소들이 모여있습니다.
           |= scripts <- webpack 을 이용한 명령문 자동실행 파일입니다.
           |
           |= src <- 소스폴더
           |    |= components <- UI 컴포넌트들이 모여있는 폴더입니다.
           |    |       |= common <- 공통 UI 컴포넌트들이 모여있는 폴더입니다.
           |    |       |= tests <- UI 컴포넌트 관련 테스트 파일이 모여있는 폴더입니다.
           |    |                   각 컴포넌트 테스트 코드는 각 tests 에서 작성해주시면 됩니다.
           |    |
           |    |= etc <- 소스 파일이 아닌 파일들을 넣어두는 곳입니다.
           |    |= lib <- 모든 위치에서 불러와서 사용할 커스텀 js 라이브러리 폴더입니다.
           |    |= modules <- Redux Reducer Module 이 들어있는 폴더입니다.
           |    |= pages <- 라우팅 entry 지점 페이지 컴포넌트들이 들어있는 폴더입니다.
           |    |= styles <- 전역적으로 사용하는 스타일 파일들이 들어있는 폴더입니다.
           |    |            전역 스타일링이 아닌 파일은 컴포넌트 내에 styled로 작성해주세요
           |    |
           |    |= App.js <- 라우터를 등록하는 Page Entry. 라우터 이외에는 작성하지 않습니다.
           |    |
           |    |= index.js <- 모든 js파일의 Entry 지점. 코드실행시 이 js 파일이 가장 먼저
           |    |              런타임에 진입합니다. 몇가지 사전 적용 코드들만 작성합니다.
           |    |= setupTests.js <- 사용하지 않습니다. (명시적으로 존재)
           |
           |= .pnp.cjs <- yarn 3.x 가 pnp 방식으로 종속성 패키지를 사용하도록 하는 메인 코드
           |= .pnp.loader.mjs
           |
           |= .yarnrc.yml <- yarn 설정파일
           |= package.json <- 종속성 패키지 명시 및 실행 스크립트 명시 파일.
           |                  일종의 프로젝트 관리자 파일. 프로젝트가 실사용하는 것들이 들어갑니다
           |
           |= tsconfig.json <- 타입스크립트 설정파일. 편의상 root로 가져왔습니다.
           |= yarn.lock <- 종속성 패키지 설치시 이 파일에 명시된 버전정보를 모두가 동일하게
           |                설치할수 있도록 해줍니다. 일종의 버전 관리자 파일.
           |...
    |...
|
```

## Solution

### 공통 솔루션

> vsc 내에서 ctrl + shift + p 또는 F1 키를 누르면 editor console이 나옵니다.
> 그후 'open' 키워드 입력후 나타나는
> Preferences: Open Settings (JSON)
> Preferences: Open Workspace Settings (JSON)
> 이 두가지 파일을 열어주세요. JSON 파일로 여셔야 합니다.

- Preferences: Open Settings (JSON) - setting.json
  해당 코드에 없는 설정 또는 다른 설정이 있다면 추가, 교체해 주세요.
  필요가 없어보이는 설정은 미리 삭제 해두세요. 나중에 꼬이면 골치아픕니다 ㅠㅠ

```
{
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "files.exclude": {
        "**/.classpath": true,
        "**/.project": true,
        "**/.settings": true,
        "**/.factorypath": true
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.formatOnSave": true,
    "terminal.integrated.defaultProfile.windows": "Command Prompt",
    "workbench.iconTheme": "material-icon-theme",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "eslint.debug": true,
    "git.autofetch": true,
    "files.associations": {
        "*.js": "javascript"
    },
    "typescript.enablePromptUseWorkspaceTsdk": true,
    "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
    "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },

    "bracketPairColorizer.depreciation-notice": false,
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

- Preferences: Open Workspace Settings (JSON) - **workspace.json**
  이 파일이 중요합니다! typescript.tsdk 설정을 가능한 한 상대 경로로 작성해주셔야 \
  sdks 설정이 제대로 작동합니다!!

```
{
	"folders": [
		{
			"path": "현재 열려있는 작업 영역 (워크스페이스) 의 경로",
		},
    {
			"path": "열린 워크스페이스 개수만큼 나타납니다.",
		}
	],
	"settings": {
                  // 여기서 상대 경로의 start entry (./) 는
                  // 항상 현재 편집기에서 열린 워크스페이스의 root 입니다.
                  // ex) Hyades 를 기준으로 워크스페이스가 열렸다면 Hyades 부터 시작
		"typescript.tsdk": "./hyades-front/.yarn/sdks/typescript/lib"
	},
}
```

설정 파일 관련된 작업 하다보면 typescript.tsdk 의 경로가 수시로 바뀝니다,,,,
뭐가 잘 안된다면 그냥 이 파일 창을 띄워두고 작업하세요,, 머리아픕니다
이 설정은 프로젝트 내 타입스크립트가 zip 아카이브 내의 모듈 타입 정의 파일을 타겟으로 잡게 해줍니다

### 모든 .js 파일이 parsing error... babel-preset-react-app 이라는 문구와 함께 에러가 발생할때

=> sdks 내의 eslint 폴더를 제대로 찾지 못해 생기는 에러입니다.

1. Hyades/hyades-front/.vscode/settings.json 파일을 엽니다.

2. 다음 코드로 설정이 되어있는지 확인 (상대경로 확인)

```
{
  ...
  "eslint.nodePath": ".yarn/sdks/eslint",
  ...
}
```

얘도 엄청 수시로 바뀝니다 주의하세요 !
특히 yarn dlx @yarnpkg/sdks vscode 명령어 실행후에 자주 바뀝니다

### 모든 .tsx 파일이 모듈을 찾지 못하는 에러

=> sdks 내의 typescript 폴더를 제대로 찾지 못해 생기는 에러입니다.

1. VSC settings.json 파일을 엽니다. Preferences: Open Settings (JSON)
   아래 설정이 있는지 확인

```
{
  ...
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "[typescript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[typescriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  ...
}
```

2. VSC workspace.json 파일을 엽니다. Preferences: Open Workspace Settings (JSON)
   아래 설정이 있는지 확인. 상대 경로가 올바르게 입력되야 합니다.

```
{
  ...
  "settings": {
  		"typescript.tsdk": "./hyades-front/.yarn/sdks/typescript/lib"
  	},
  ...
}

```

3. .../.vscode/settings.json 파일을 엽니다.
   아래 설정이 있는지 확인. 상대 경로가 올바르게 입력되야 합니다.

```
{
  ...
  "typescript.tsdk": ".yarn/sdks/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  ...
}
```

4. .tsx 파일을 하나 열어둔 상태에서 F1 or ctrl + shift + p 를 입력
   Typescript: Select Typescript Version 선택

5. 작업 영억 버전 사용 (workspace version) 선택
