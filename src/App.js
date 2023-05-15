import s from './styles/App.module.scss'
import {useState} from "react";
import icon from "./img/icon.svg"

function App() {
    const [username, setUsername] = useState('')
    const [validUserName, setValidUserName] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)

    const [labelText, setLabelText] = useState('')

    const [radio, setRadio] = useState('')

    const [remember, setRemember] = useState(false)

    const [toggle, setToggle] = useState(false)

    const [dropdown, setDropdown] = useState('')
    const validateUsername = () => {
        if (username.length >= 4 && username.length <= 12) {
            setValidUserName(true)
        } else {
            setValidUserName(false)
        }
    }
    const validatePassword = () => {
        if (password.length >= 4 && password.length <= 12) {
            setValidPassword(true)
        } else {
            setValidPassword(false)
        }
    }
    const sendUser = () => {
        const user = {
            username: username,
            password: password,
            inputTextLabel: labelText,
            rememberMe: remember,
            checkboxSelection: toggle,
            radioSelection: radio,
            dropdownSelection: dropdown

        }
        alert(JSON.stringify(user, null, 2))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.inputs}>
                    <label htmlFor="username">Username</label>
                    <input
                        type='text'
                        className={s.inputText}
                        placeholder={'Enter username'}
                        style={validUserName ? {marginBottom: "32px"} : {border: '2px solid #EB5757'}}
                        name={'username'}
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            validateUsername()
                        }}
                    />
                    {validUserName ? null :
                        <p className={s.error} style={{marginBottom: "32px"}}>Your name is between 4 and 12
                            characters</p>}
                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        className={s.inputText}
                        placeholder={'Enter password'}
                        name={'password'}
                        value={password}
                        style={validPassword ? {marginBottom: "32px"} : {border: '2px solid #EB5757'}}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            validatePassword()
                        }}
                    />
                    {validPassword ? null :
                        <p className={s.error} style={{marginBottom: "32px"}}>Your name is between 4 and 12
                            characters</p>}
                    <div className={s.inputContainer}>
                        <label htmlFor={'textLabel'}>Input Text Label</label>
                        <input
                            type={'text'}
                            className={`${s.inputText} ${s.labelText}`}
                            name={'textLabel'}
                            value={labelText}
                            onChange={(e) => setLabelText(e.target.value)}
                        />
                        <img src={icon} alt="" className={s.labelIcon}/>
                        <p className={s.error}>Error message informing me of a problem</p>
                    </div>
                </div>
                <div className={s.radioBtns}>
                    <div className={s.remember}>
                        <input type={'checkbox'} className={s.customCheck} id={'remember'} name={'remember'}
                               value={'yes'} onChange={() => setRemember(!remember)}/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className={s.toggle}>
                        <label className={`${s.toggleSwitch} ${toggle ? s.checked : null}`}>
                            <input type={'checkbox'} checked={toggle} onChange={() => setToggle(!toggle)}/>
                            <span className={s.slider}></span>
                        </label>
                        <p className={s.toggleStatus}>{toggle ? "On" : "Off"}</p>
                    </div>
                    <div className={s.radio}>
                        <div>
                            <input
                                type={'radio'}
                                className={s.customRadio}
                                id={'radio'}
                                name={'radio'}
                                value={'option 1'}
                                onChange={(e) => setRadio(e.target.value)}
                            />
                            <label htmlFor="radio" className={s.radioLabel}>Radio selection 1</label>
                        </div>
                        <div>
                            <input
                                type={'radio'}
                                className={s.customRadio}
                                id={'radio2'}
                                name={'radio'}
                                value={'option 2'}
                                onChange={(e) => setRadio(e.target.value)}
                            />
                            <label htmlFor="radio2" className={s.radioLabel}>Radio selection 2</label>
                        </div>
                        <div>
                            <input
                                type={'radio'}
                                className={s.customRadio}
                                id={'radio3'}
                                name={'radio'}
                                value={'option 3'}
                                onChange={(e) => setRadio(e.target.value)}
                            />
                            <label htmlFor="radio3" className={s.radioLabel}>Radio selection 3</label>
                        </div>
                    </div>
                </div>
                <div className={s.dropdown}>
                    <h2 className={s.title}>Dropdown title</h2>
                    <select className={s.select} onChange={(e) => {
                        setDropdown(e.target.value)
                    }}>
                        <option className={`${s.option}`} value={'Dropdown option'} selected>
                            Dropdown option 1
                        </option>
                        <option className={s.option} value={'Dropdown option2'}>Dropdown option 2</option>
                        <option className={s.option} value={'Dropdown option3'}>Dropdown option 3</option>
                    </select>
                </div>
                <div className={s.buttons}>
                    <button className={s.clear} onClick={() => window.location.reload()}>Cancel</button>
                    <button className={s.next} onClick={sendUser}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default App;
