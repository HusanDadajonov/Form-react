import { useState,useEffect } from "react/cjs/react.development";

function Form({setInpVal,setFullnameVal,setMothVal,setYearVal,inpVal,fullnameVal}){
    const inpErrStyle = {
        borderColor: "red",
    }
    const cardErrStyle = {
        color : "red",
    }

    const [formCheck,setFormCheck] = useState(false);
    const [cardErr,setCardErr] = useState("");
    const [nameErr,setNameErr] = useState("")
    const [bool,SetBool] = useState(true);
    const [bool2,setBool2] = useState(true);
    function activeBorders(e){
        if(e == 1)document.querySelector(".card-item__number").classList.add("active-border");
        if(e == 2)document.querySelector(".card-item__info").classList.add("active-border");
        if(e == 3)document.querySelector(".card-item__date").classList.add("active-border");
    }
    function removeBorders(e){
        if(e == 1)document.querySelector(".card-item__number").classList.remove("active-border");
        if(e == 2)document.querySelector(".card-item__info").classList.remove("active-border");
        if(e == 3)document.querySelector(".card-item__date").classList.remove("active-border");
    }

    function Validate(){
        if(inpVal.length == 16) {
            SetBool(true)
            setCardErr("")
        }
        else {
            if(inpVal.length >= 1){
                SetBool(false)
                setCardErr("Karta raqamini to'liq kiriting!")
            }
        }
    }

    function formSumb(e){
        e.preventDefault()
        Validate()
        if(inpVal == ""){
            SetBool(false)
            setCardErr("Karta raqamini to'liq kiriting!")
        }
        if(fullnameVal.length <= 6){
            setBool2(false);
            setNameErr("Ismingizni kamida 6 ta hardan iborat bo'lishi kerak!")
        }
        
        if(fullnameVal.length >= 6 && inpVal.length >= 16){
            setInpVal("");
            setFullnameVal("")
            setFormCheck(false)
        }
        setFormCheck(false)
    }

    useEffect(()=> {
        if(inpVal.length == 16) {
            SetBool(true)
            setCardErr("")
            setFormCheck(true)
        }
        if(inpVal.length >= 1 && formCheck == true){
            setCardErr("Karta raqamini to'liq kiriting!")
            SetBool(false)
            setFormCheck(false)
        }
    },[inpVal])

    useEffect(()=> {
        setFormCheck(false)
        if(fullnameVal.length >= 6){
            setBool2(true);
            setNameErr("")
            setFormCheck(true)
        }
        else {
            if(fullnameVal.length >= 1 && formCheck == true){
                setBool2(false);
                setNameErr("Ismingizni kamida 6 ta hardan iborat bo'lishi kerak!")
            }
        }
    },[fullnameVal])

    

    return(
        <form className="card-form__inner" onSubmit={formSumb}>
        <div className="card-input">
            <label htmlFor="cardNumber" className="card-input__label">Card Number</label> 
            <input type="text" id="cardNumber" style={bool == false ? inpErrStyle : null} value={inpVal} maxLength={16} data-ref="cardNumber" autoComplete="off" className="card-input__input" onBlur={()=> removeBorders(1)} onClick={()=> activeBorders(1)} onFocus={()=> activeBorders(1)} onChange={(e)=> setInpVal(e.target.value)} />
            <p style={cardErrStyle}>{cardErr}</p> 
        </div>
        <div className="card-input">
            <label htmlFor="cardName" className="card-input__label">Card Holders</label>
            <input type="text" id="cardName"  style={bool2 == false ? inpErrStyle : null} value={fullnameVal} data-ref="cardName" autoComplete="off" className="card-input__input" onBlur={()=> removeBorders(2)}  onFocus={()=> activeBorders(2)} onClick={()=> activeBorders(2)} onChange={(e)=> setFullnameVal(e.target.value)}/>
            <p style={cardErrStyle}>{nameErr}</p>
        </div>
        <div className="card-form__row">
                <div className="card-form__col">
                    <div className="card-form__group">
                        <label htmlFor="cardMonth" className="card-input__label" >Expiration Date</label>
                        <select id="cardMonth" data-ref="cardDate" className="card-input__input -select" onBlur={()=> removeBorders(3)} onFocus={()=> activeBorders(3)} onClick={()=> activeBorders(3)} onChange={(e)=> setMothVal(e.target.value)}>
                            <option value="" disabled="disabled" >Month</option>
                            <option value="01">
                                01
                            </option>
                            <option value="02">
                                02
                            </option>
                            <option value="03">
                                03
                            </option>
                            <option value="04">
                                04
                            </option>
                            <option value="05">
                                05
                            </option>
                            <option value="06">
                                06
                            </option>
                            <option value="07">
                                07
                            </option>
                            <option value="08">
                                08
                            </option>
                            <option value="09">
                                09
                            </option>
                            <option value="10">
                                10
                            </option>
                            <option value="11">
                                11
                            </option>
                            <option value="12">
                                12
                            </option>
                        </select>
                        <select id="cardYear" data-ref="cardDate" className="card-input__input -select" onBlur={()=> removeBorders(3)} onClick={()=> activeBorders(3) } onFocus={()=> activeBorders(3)} onChange={(e)=> setYearVal(e.target.value)}>
                            <option value="" disabled="disabled" value>Year</option>
                            <option value="2022">
                                2022
                            </option>
                            <option value="2023">
                                2023
                            </option>
                            <option value="2024">
                                2024
                            </option>
                            <option value="2025">
                                2025
                            </option>
                            <option value="2026">
                                2026
                            </option>
                            <option value="2027">
                                2027
                            </option>
                            <option value="2028">
                                2028
                            </option>
                            <option value="2029">
                                2029
                            </option>
                            <option value="2030">
                                2030
                            </option>
                            <option value="2031">
                                2031
                            </option>
                            <option value="2032">
                                2032
                            </option>
                            <option value="2033">
                                2033
                            </option>
                        </select>
                    </div>
                </div>
                <div className="card-form__col -cvv">
                    <div className="card-input">
                        <label htmlFor="cardCvv" className="card-input__label">CVV</label>
                        <input type="number" id="cardCvv" maxLength="4" autoComplete="off" className="card-input__input" />
                    </div>
                </div>
        </div>
            <button className="card-form__button">
                Submit
            </button>
    </form>
    
    )
}

export default Form