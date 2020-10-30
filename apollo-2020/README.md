# apollo 2020

Movie app built with React with GraphQL

# apollo??

- GraphQL API를 사용하기 위한 방법

- REST API
    - URL로 가서 json 받아옴

- GraphQL
    - query 또는 mutation을 보내서 받아옴

# install

- $ yarn add styled-components react-router-dom
    - styled-components : for css
    - react-router-dom : for router
- $ yarn add apollo-boost @apollo/react-hooks graphql
    - apollo-boost, @apollo/react-hooks : for hooks
    - graphql : for graphql
- $ yarn styled-component
    - css를 컴포넌트화 시켜서 사용

- chrome web store
    - apollo dev tools 설치
        - dev mode에서 apollo tab으로 많은것 확인 가능 (query cache 등)

# apollo-boost

- graphQL Client

# GraphQL Yoga

- graphQL Server

# error 처리

- You gave us a visitor for the node type ${nodeType} but it's not a valid type
    - $ yarn.lock 삭제
    - $ yarn install
    - $ yarn upgrade