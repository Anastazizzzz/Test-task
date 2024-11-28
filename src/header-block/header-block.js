import React from "react";
import "./header-block.css"

function HeaderBlock(){
    return(
        <div className="text-part">

        {/* Текстовый блок */}
            <div className="sub-title">
                <span className="group3" id="lilWord1">Отвечаем </span>
                <span className="group4" id="lilWord2">за </span>
                <span className="group4" id="lilWord3">качество, </span>
                <span className="group4" id="lilWord4">потому </span>
                <span className="group3" id="lilWord5">что </span>
                <span className="group4" id="lilWord6">производим </span>
                <span className="group4" id="lilWord7">сами </span>
            </div>

        {/* Заголовок в три строки */}
            <div className="parent-header">
                {/* Первая строка */}
                <div className="firstStr">
                <span className="words group1" id="GeenScreen">ИННОВАЦИИ,</span>
                <span className="words group1">КОНТРОЛЬ</span>
            </div>

        {/* Вторая строка */}
            <div className="secondStr">
                <span className="words group2">ПРОИЗВОДСТВА,</span>
                <span className="words group1">СПЕЦИФИКАЦИЯ,</span>
            </div>

        {/* Третья строка */}
            <div className="thirdStr">
                <span className="words group1">ДИЛЕРСКАЯ</span>
                <span className="words group2">СЕТЬ</span>
            </div>
        </div>
    </div>

    )
}

export default HeaderBlock;