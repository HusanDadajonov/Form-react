import CarNum from "./Form/CarNum/CarNum";

function Card({inpVal,str,fullnameVal,monthVal,yearVal}){
    function checkStr(index){
        return str[index] == undefined ? "#" : str[index]
    }

    return (
        <div className="card-list">
          <div className="card-item ">
              <div className="card-item__side -front">
                  <div className="card-item__focus"></div>
                  <div className="card-item__cover">
                      <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/16.jpeg" className="card-item__bg" />
                  </div>
                  <div className="card-item__wrapper">
                      <div className="card-item__top">
                          <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" className="card-item__chip" />
                          <div className="card-item__type"><img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="" className="card-item__typeImg" /></div>
                      </div>
                      <label htmlFor="cardNumber" className="card-item__number">
                          <CarNum text = {checkStr(0)}/>
                          <CarNum text = {checkStr(1)}/>
                          <CarNum text = {checkStr(2)}/>
                          <CarNum text = {checkStr(3)}/>
                          <span><div className="card-item__numberItem -active"> </div></span>
                          <CarNum text = {checkStr(4)}/>
                          <CarNum text = {checkStr(5)}/>
                          <CarNum text = {checkStr(6)}/>
                          <CarNum text = {checkStr(7)}/>
                          <span><div className="card-item__numberItem -active"> </div></span>
                          <CarNum text = {checkStr(8)}/>
                          <CarNum text = {checkStr(9)}/>
                          <CarNum text = {checkStr(10)}/>
                          <CarNum text = {checkStr(11)}/>
                          <span><div className="card-item__numberItem -active"> </div></span>
                          <CarNum text = {checkStr(12)}/>
                          <CarNum text = {checkStr(13)}/>
                          <CarNum text = {checkStr(14)}/>
                          <CarNum text = {checkStr(15)}/>
                      </label>
                      <div className="card-item__content">
                          <label htmlFor="cardName" className="card-item__info">
                              <div className="card-item__holder">Card Holder</div>
                              <div className="card-item__name">{fullnameVal == "" ? "Full Name" : fullnameVal}</div>
                          </label>
                          <div className="card-item__date">
                              <label htmlFor="cardMonth" className="card-item__dateTitle">Expires</label> <label htmlFor="cardMonth" className="card-item__dateItem"><span> {monthVal == "" ? "MM" : monthVal}</span></label>/
                              <label htmlFor="cardYear" className="card-item__dateItem"><span> {yearVal == "" ? "YY" : yearVal.slice(-2)}</span></label>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="card-item__side -back">
                  <div className="card-item__cover"><img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/16.jpeg" className="card-item__bg" /></div>
                  <div className="card-item__band"></div>
                  <div className="card-item__cvv">
                      <div className="card-item__cvvTitle">CVV</div>
                      <div className="card-item__cvvBand"></div>
                      <div className="card-item__type"><img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" className="card-item__typeImg" /></div>
                  </div>
              </div>
          </div>
        </div>
      );
}

export default Card