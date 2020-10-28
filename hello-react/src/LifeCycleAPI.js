
/**********************************************************************************
    LifeCycle API?

    컴포넌트가 브라우저에서 visible / invisible / update 될시 호출

    constructor : 컴포넌트 생성시 호출
    construct(props) {
        super(props);
    }

    componentDidMount : 컴포넌트가 화면에 나타났을 때 호출,
                        외부라이브러리 연동 , 데이터 요청(ajax, graphQL, etc) 등 작업
                        DOM에 관련 작업 : 스크롤 설정, 크기 읽어오기 등

    getDerivedStateFromProps(nextProps, prevState) : 컴포넌트 업데이트시 호출,
                                                    컴포넌트 업데이트 시점? props/state 변화시,
                                                    props로 받아온 값을 state로 동기화 하는 작업시 사용
    
    shouldComponentUpdate(nextProps, nextState) : 컴포넌트 최적화시 사용
                                                    return flase시 업데이트 안함
                                                    기본적으로 true 반환

    getSnapshotBeforeUpdate() : render() / getSnapshotBeforeUpdate() / 실제 DOM 변화 발생 / componentDidUpdate시 호출
    
    componentDidUpdate(prevProps, prevState, snapshot) : render() 호출 후 호출, 
                                                        이미 this.props / this.state 변경된 후
                                                        prevProps / prevState를 통해 이전 값 조회 가능
                                                        
    componentWillUnmount() : 컴포넌트 삭제, 주 등록 이벤트 삭제, setTimeout 등 걸어놨다면, clearTimeout으로 제거
                            외부 라이브러리중 dispose 필요한 라이브러리가 있다면 여기서 호출

    componentDidCatch(error, info) : render에서 error시 error처리
                                    단, 자신의 render함수에서 발생하는 것은 잡지못하며, 자식 컴포넌트 내부 에러들 잡음
                                    
                                    자주 발생하는 오류
                                    1. 존재하지 않는 함수 호출시 (props로 받은 함수가 전달되지 않았을 때)
                                    2. 배열이나 객체가 올 줄 알았는데 해당 객체 및 배열이 존재하지 않을때
                                    
                                    해결책
                                    1. if 문
                                        render() {
                                            if(!this.props.object || !this.props.array || this.props.array.length === 0) return null;
                                            ...
                                        }
                                    2. defaultProps
                                        class Sample extends Component {
                                            static defaultProps = {
                                                onIncrement: () => console.warn('onIncrement is not defined'),
                                                object: {},
                                                array: []
                                            }
                                        }
                                    
                                    위의 경우로도 안잡힌다면 componentDidCatch로 잡아서 세부내용을 서버에 기록해서 조사
                                    
***********************************************************************************/


 