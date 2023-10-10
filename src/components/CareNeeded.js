function careNeeded( scaleValue, careType) {
    let typeEntretien = ""
    if (careType =='light') {
        typeEntretien = "de lumière"
    } else (
        typeEntretien = "d'arrosage"
    )

    let intensiteEntretien = ""

    if (scaleValue == 1 ) { 
        intensiteEntretien = "Cette plante requiert peu "
    } else if ( scaleValue == 2 ) {
        intensiteEntretien = "Cette plante requiert modérement "
    } else (
        intensiteEntretien ="Cette plante requiert beaucoup "
    )
    alert(`${intensiteEntretien}${typeEntretien}` )
}

export default careNeeded