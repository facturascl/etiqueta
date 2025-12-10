// =================================================================
// ARCHIVO: app.js (MODIFICADO)
// Lógica: Tier -> Familia -> Producto (Corregido y minimalista)
// =================================================================

// =================================================================
// 1. DATOS ORIGINALES DEL CATÁLOGO (RAW DATA)
// (TU CÓDIGO PERMANECE IGUAL)
// =================================================================

const RAW_CATALOG_DATA = [
    // TIER 1
    { tier: "T1", descripcion: "CLIP - ONS", precio: 40000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T1ClpOn", codigo_barra: "2000409297917" },
    { tier: "T1", descripcion: "LENT1 NEUTROS CON AR VERDE", precio: 89000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T1LeNeArVr", codigo_barra: "2000409297924" },
    { tier: "T1", descripcion: "LENT1 DE SOL NEUTRO", precio: 89000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T1LeNeSol", codigo_barra: "2000409297931" },
    { tier: "T1", descripcion: "LENT1 PA LA COMPU NEUTROS", precio: 89000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T1LeNeCom", codigo_barra: "2000409297948" },
    
    { tier: "T1", descripcion: "LENT1 MONOFOCAL+AR AZUL", precio: 128000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeMoArAz", codigo_barra: "2000409297955" },
    { tier: "T1", descripcion: "LENT1 MONOFOCAL+HI", precio: 138000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeMoHi", codigo_barra: "2000409297962" },
    { tier: "T1", descripcion: "LENT1 MONO+ARAZUL+HI", precio: 177000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeMoArAzHi", codigo_barra: "2000409297979" },
    { tier: "T1", descripcion: "LENT1 DE SOL GRADUADOS", precio: 188000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeMoSol", codigo_barra: "2000409297986" },
    { tier: "T1", descripcion: "LENT1 MONOFOCAL FOTO", precio: 148000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeMoFo", codigo_barra: "2000409297993" },
    
    { tier: "T1", descripcion: "LENT1 PROGRESIVO NEWTON", precio: 188000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNew", codigo_barra: "2000409298006" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON + AR AZUL", precio: 227000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewArAz", codigo_barra: "2000409298013" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON + POLARIZADO", precio: 277000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewSol", codigo_barra: "2000409298020" },
    { tier: "T1", descripcion: "LENT1 PROGRESIVO NEWTON + FOTO", precio: 257000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewFo", codigo_barra: "2000409298037" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON+FOTO+HI", precio: 207000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewFoHi", codigo_barra: "2000409298044" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON + HI", precio: 237000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewHi", codigo_barra: "2000409298051" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWTON+HI+ARAZUL", precio: 177000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewHiArAz", codigo_barra: "2000409298068" },
    
    { tier: "T1", descripcion: "LENT1 PROGRESIVO NEWTON PLUS", precio: 308000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewPl", codigo_barra: "2000409298075" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWPLUS + AR AZUL", precio: 347000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewPlArAz", codigo_barra: "2000409298082" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWPLUS + POLARIZADO", precio: 397000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewPlSol", codigo_barra: "2000409298099" },
    { tier: "T1", descripcion: "LENT1 PROGRESIVO NEWPLUS + FOTO", precio: 158000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewPlFo", codigo_barra: "2000409298105" },
    { tier: "T1", descripcion: "LENT1 PROGRENEWPLUS+FOTO+HI", precio: 426000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewPlFoHi", codigo_barra: "2000409298112" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWPLUS + HI", precio: 357000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewPlHi", codigo_barra: "2000409298129" },
    { tier: "T1", descripcion: "LENT1 PROGRE NEWPLUS+HI+ARAZUL", precio: 396000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T1LeProNewPlHiArAz", codigo_barra: "2000409298136" },

    // TIER 2
    { tier: "T2", descripcion: "LENT2 NEUTROS CON AR VERDE", precio: 99000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T2LeNeArVr", codigo_barra: "2000409298143" },
    { tier: "T2", descripcion: "LENT2 DE SOL NEUTRO", precio: 99000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T2LeNeSol", codigo_barra: "2000409298150" },
    { tier: "T2", descripcion: "LENT2 PA LA COMPU NEUTROS", precio: 99000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T2LeNeCom", codigo_barra: "2000409298167" },
    
    { tier: "T2", descripcion: "LENT2 MONOFOCAL + AR AZUL", precio: 138000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeMoArAz", codigo_barra: "2000409298174" },
    { tier: "T2", descripcion: "LENT2 MONOFOCAL + HI", precio: 148000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeMoHi", codigo_barra: "2000409298181" },
    { tier: "T2", descripcion: "LENT2 MONO + AR AZUL + HI", precio: 187000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeMoArAzHi", codigo_barra: "2000409298198" },
    { tier: "T2", descripcion: "LENT2 DE SOL GRADUADOS", precio: 188000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeMoSol", codigo_barra: "2000409298204" },
    { tier: "T2", descripcion: "LENT2 MONOFOCAL FOTO", precio: 168000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeMoFo", codigo_barra: "2000409298211" },
    
    { tier: "T2", descripcion: "LENT2 PROGRESIVO NEWTON", precio: 198000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNew", codigo_barra: "2000409298228" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON + AR AZUL", precio: 237000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewArAz", codigo_barra: "2000409298235" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON + POLARIZADO", precio: 188000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewSol", codigo_barra: "2000409298242" },
    { tier: "T2", descripcion: "LENT2 PROGRESIVO NEWTON + FOTO", precio: 168000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewFo", codigo_barra: "2000409298259" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON+FOTO+HI", precio: 436000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewFoHi", codigo_barra: "2000409298266" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON + HI", precio: 247000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewHi", codigo_barra: "2000409298273" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWTON+HI+AR AZUL", precio: 286000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewHiArAz", codigo_barra: "2000409298280" },
    
    { tier: "T2", descripcion: "LENT2 PROGRESIVO NEWTON PLUS", precio: 318000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewPl", codigo_barra: "2000409298297" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWPLUS + AR AZUL", precio: 456000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewPlArAz", codigo_barra: "2000409298303" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWPLUS + POLARIZADO", precio: 407000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewPlSol", codigo_barra: "2000409298310" },
    { tier: "T2", descripcion: "LENT2 PROGRESIVO NEWPLUS + FOTO", precio: 387000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewPlFo", codigo_barra: "2000409298327" },
    { tier: "T2", descripcion: "LENT2 PROGRENEWPLUS+FOTO+HI", precio: 436000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewPlFoHi", codigo_barra: "2000409298334" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWPLUS + HI", precio: 367000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewPlHi", codigo_barra: "2000409298341" },
    { tier: "T2", descripcion: "LENT2 PROGRE NEWPLUS+HI+ARAZUL", precio: 406000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T2LeProNewPlHiArAz", codigo_barra: "2000409298358" },
    
    // TIER 3
    { tier: "T3", descripcion: "LENT3 NEUTROS CON AR VERDE", precio: 119000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T3LeNeArVr", codigo_barra: "2000409298365" },
    { tier: "T3", descripcion: "LENT3 DE SOL NEUTRO", precio: 119000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T3LeNeSol", codigo_barra: "2000409298372" },
    { tier: "T3", descripcion: "LENT3 PA LA COMPU NEUTROS", precio: 119000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T3LeNeCom", codigo_barra: "2000409298389" },
    
    { tier: "T3", descripcion: "LENT3 MONOFOCAL + AR AZUL", precio: 158000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeMoArAz", codigo_barra: "2000409298396" },
    { tier: "T3", descripcion: "LENT3 MONOFOCAL + HI", precio: 168000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeMoHi", codigo_barra: "2000409298402" },
    { tier: "T3", descripcion: "LENT3 MONO + AR AZUL + HI", precio: 207000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeMoArAzHi", codigo_barra: "2000409298419" },
    { tier: "T3", descripcion: "LENT3 DE SOL GRADUADOS", precio: 208000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeMoSol", codigo_barra: "2000409298426" },
    { tier: "T3", descripcion: "LENT3 MONOFOCAL FOTO", precio: 188000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeMoFo", codigo_barra: "2000409298433" },
    
    { tier: "T3", descripcion: "LENT3 PROGRESIVO NEWTON", precio: 218000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNew", codigo_barra: "2000409298440" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON + AR AZUL", precio: 227000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewArAz", codigo_barra: "2000409298457" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON + POLARIZADO", precio: 307000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewSol", codigo_barra: "2000409298464" },
    { tier: "T3", descripcion: "LENT3 PROGRESIVO NEWTON + FOTO", precio: 307000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewFo", codigo_barra: "2000409298471" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON+FOTO+HI", precio: 356000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewFoHi", codigo_barra: "2000409298488" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON + HI", precio: 267000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewHi", codigo_barra: "2000409298495" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWTON+HI IN+ARAZUL", precio: 207000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewHiArAz", codigo_barra: "2000409298501" },
    
    { tier: "T3", descripcion: "LENT3 PROGRESIVO NEWTON PLUS", precio: 338000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewPl", codigo_barra: "2000409298518" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWPLUS + AR AZUL", precio: 377000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewPlArAz", codigo_barra: "2000409298525" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWPLUS + POLARIZADO", precio: 427000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewPlSol", codigo_barra: "2000409298532" },
    { tier: "T3", descripcion: "LENT3 PROGRESIVO NEWPLUS + FOTO", precio: 407000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewPlFo", codigo_barra: "2000409298549" },
    { tier: "T3", descripcion: "LENT3 PROGRENEWPLUS+FOTO+HI", precio: 456000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewPlFoHi", codigo_barra: "2000409298556" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWPLUS + HI", precio: 387000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewPlHi", codigo_barra: "2000409298563" },
    { tier: "T3", descripcion: "LENT3 PROGRE NEWPLUS+HI+ARAZUL", precio: 426000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T3LeProNewPlHiArAz", codigo_barra: "2000409298570" },
    
    // TIER 4
    { tier: "T4", descripcion: "LENT4 NEUTROS CON AR VERDE", precio: 139000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T4LeNeArVr", codigo_barra: "2000409298587" },
    { tier: "T4", descripcion: "LENT4 DE SOL NEUTRO", precio: 139000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T4LeNeSol", codigo_barra: "2000409298594" },
    { tier: "T4", descripcion: "LENT4 PA LA COMPU NEUTROS", precio: 139000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T4LeNeCom", codigo_barra: "2000409298600" },
    
    { tier: "T4", descripcion: "LENT4 MONOFOCAL + AR AZUL", precio: 178000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeMoArAz", codigo_barra: "2000409298617" },
    { tier: "T4", descripcion: "LENT4 MONOFOCAL + HI", precio: 188000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeMoHi", codigo_barra: "2000409298624" },
    { tier: "T4", descripcion: "LENT4 MONO + AR AZUL + HI", precio: 227000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeMoArAzHi", codigo_barra: "2000409298631" },
    { tier: "T4", descripcion: "LENT4 DE SOL GRADUADOS", precio: 139016.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeMoSol", codigo_barra: "2000409298648" },
    { tier: "T4", descripcion: "LENT4 MONOFOCAL FOTO", precio: 208000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeMoFo", codigo_barra: "2000409298655" },
    
    { tier: "T4", descripcion: "LENT4 PROGRESIVO NEWTON", precio: 238000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNew", codigo_barra: "2000409298662" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON + AR AZUL", precio: 277000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewArAz", codigo_barra: "2000409298679" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON + POLARIZADO", precio: 327000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewSol", codigo_barra: "2000409298686" },
    { tier: "T4", descripcion: "LENT4 PROGRESIVO NEWTON + FOTO", precio: 307000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewFo", codigo_barra: "2000409298693" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON+FOTO+HI", precio: 356000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewFoHi", codigo_barra: "2000409298709" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON + HI", precio: 287000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewHi", codigo_barra: "2000409298716" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWTON+HI+ARAZUL", precio: 326000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewHiArAz", codigo_barra: "2000409298723" },
    
    { tier: "T4", descripcion: "LENT4 PROGRESIVO NEWTON PLUS", precio: 358000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewPl", codigo_barra: "2000409298730" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWPLUS + AR AZUL", precio: 397000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewPlArAz", codigo_barra: "2000409298747" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWPLUS + POLARIZADO", precio: 447000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewPlSol", codigo_barra: "2000409298754" },
    { tier: "T4", descripcion: "LENT4 PROGRESIVO NEWPLUS + FOTO", precio: 427000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewPlFo", codigo_barra: "2000409298761" },
    { tier: "T4", descripcion: "LENT4 PROGRENEWPLUS+FOTO+HI", precio: 476000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewPlFoHi", codigo_barra: "2000409298778" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWPLUS + HI", precio: 407000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewPlHi", codigo_barra: "2000409298785" },
    { tier: "T4", descripcion: "LENT4 PROGRE NEWPLUS+HI+ARAZUL", precio: 446000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T4LeProNewPlHiArAz", codigo_barra: "2000409298792" },
    
    // TIER 5
    { tier: "T5", descripcion: "LENT5 NEUTROS CON AR VERDE", precio: 159000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T5LeNeArVr", codigo_barra: "2000409298808" },
    { tier: "T5", descripcion: "LENT5 DE SOL NEUTRO", precio: 159000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T5LeNeSol", codigo_barra: "2000409298815" },
    { tier: "T5", descripcion: "LENT5 PA LA COMPU NEUTROS", precio: 159000.00, familia_key: "NG", graduacion_key: "NOGRAD", sku_con_apostrofe: "T5LeNeCom", codigo_barra: "2000409298822" },
    
    { tier: "T5", descripcion: "LENT5 MONOFOCAL + AR AZUL", precio: 198000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeMoArAz", codigo_barra: "2000409298839" },
    { tier: "T5", descripcion: "LENT5 MONOFOCAL + HI", precio: 208000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeMoHi", codigo_barra: "2000409298846" },
    { tier: "T5", descripcion: "LENT5 MONO + AR AZUL+ HI", precio: 247000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeMoArAzHi", codigo_barra: "2000409298853" },
    { tier: "T5", descripcion: "LENT5 DE SOL GRADUADOS", precio: 248000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeMoSol", codigo_barra: "2000409298860" },
    { tier: "T5", descripcion: "LENT5 MONOFOCAL FOTOCROMÁTICOS", precio: 228000.00, familia_key: "MO", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeMoFo", codigo_barra: "2000409298877" },
    
    { tier: "T5", descripcion: "LENT5 PROGRESIVO NEWTON", precio: 258000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNew", codigo_barra: "2000409298884" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON + AR AZUL", precio: 297000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewArAz", codigo_barra: "2000409298891" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON + POLARIZADO", precio: 347000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewSol", codigo_barra: "2000409298907" },
    { tier: "T5", descripcion: "LENT5 PROGRESIVO NEWTON + FOTO", precio: 327000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewFo", codigo_barra: "2000409298914" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON+FOTO+HI", precio: 376000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewFoHi", codigo_barra: "2000409298921" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON + HI", precio: 307000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewHi", codigo_barra: "2000409298938" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWTON+HI+ARAZUL", precio: 346000.00, familia_key: "PN", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewHiArAz", codigo_barra: "2000409298945" },
    
    { tier: "T5", descripcion: "LENT5 PROGRESIVO NEWTON PLUS", precio: 378000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewPl", codigo_barra: "2000409298952" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWPLUS + AR AZUL", precio: 417000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewPlArAz", codigo_barra: "2000409298969" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWPLUS + POLARIZADO", precio: 467000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewPlSol", codigo_barra: "2000409298976" },
    { tier: "T5", descripcion: "LENT5 PROGRESIVO NEWPLUS + FOTO", precio: 447000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewPlFo", codigo_barra: "2000409298983" },
    { tier: "T5", descripcion: "LENT5 PROGRENEWPLUS+FOTO+HI", precio: 496000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewPlFoHi", codigo_barra: "2000409298990" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWPLUS + HI", precio: 427000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewPlHi", codigo_barra: "2000409299003" },
    { tier: "T5", descripcion: "LENT5 PROGRE NEWPLUS+HI+ARAZUL", precio: 466000.00, familia_key: "NP", graduacion_key: "GRAD", sku_con_apostrofe: "T5LeProNewPlHiArAz", codigo_barra: "2000409299010" },

    // MICAS (TIER 5)
    { tier: "T5", descripcion: "MICAS GRADUADAS AR VERDE", precio: 42500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicMoArVr", codigo_barra: "2000409299027" },
    { tier: "T5", descripcion: "MICAS GRADUADAS AR AZUL", precio: 81500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicMoArAz", codigo_barra: "2000409299034" },
    { tier: "T5", descripcion: "MICAS GRADUADAS FOTO", precio: 111500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicMoFo", codigo_barra: "2000409299041" },
    { tier: "T5", descripcion: "MICAS GRADUADAS POLARIZADAS", precio: 131500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicMoArSol", codigo_barra: "2000409299058" },
    { tier: "T5", descripcion: "MICAS NEUTRAS POLARIZADAS", precio: 131500.00, familia_key: "MI", graduacion_key: "NOGRAD", sku_con_apostrofe: "T5MicNeSol", codigo_barra: "2000409299065" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON", precio: 141500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNew", codigo_barra: "2000409299072" },
    { tier: "T5", descripcion: "MICAS PROGRE NEWTON+POLARIZADO", precio: 230500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewSol", codigo_barra: "2000409299089" },
    { tier: "T5", descripcion: "MICAS PROGRENEWTON+AR AZUL", precio: 180500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewArAz", codigo_barra: "2000409299096" },
    { tier: "T5", descripcion: "MICAS PROGRE NEWTON+FOTO", precio: 210500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewFo", codigo_barra: "2000409299102" },
    { tier: "T5", descripcion: "MICAS PROGRE NEWTON+HI", precio: 190500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewHi", codigo_barra: "2000409299119" },
    { tier: "T5", descripcion: "MICAS PROGRENEW+HI+AR AZUL", precio: 229500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewHiArAz", codigo_barra: "2000409299126" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWTON PLUS", precio: 261500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewPl", codigo_barra: "2000409299133" },
    { tier: "T5", descripcion: "MICAS PROGRE NEWPLUS+AR AZUL", precio: 300500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewPlArAz", codigo_barra: "2000409299140" },
    { tier: "T5", descripcion: "MICAS PROGRENEWPLUS+POLARIZADO", precio: 350500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewPlSol", codigo_barra: "2000409299157" },
    { tier: "T5", descripcion: "MICAS PROGRESIVO NEWPLUS+FOTO", precio: 330500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewPlFo", codigo_barra: "2000409299164" },
    { tier: "T5", descripcion: "MICAS PROGRENEWPLUS+HI", precio: 310500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewPlHi", codigo_barra: "2000409299171" },
    { tier: "T5", descripcion: "MICAS PROGRNEWPLUS+HI+ARAZUL", precio: 349500.00, familia_key: "MI", graduacion_key: "GRAD", sku_con_apostrofe: "T5MicProNewPlHiArAz", codigo_barra: "2000409299195" }
];


// =================================================================
// 2. PROCESAMIENTO Y MAPPING (SIMPLIFICADO)
// (TU CÓDIGO PERMANECE IGUAL)
// =================================================================

function processCatalogData(data) {
    const processedData = {};
    data.forEach(item => {
        // Limpiamos el SKU para usarlo como una clave de producto limpia
        const cleanSku = item.sku_con_apostrofe.replace(/'/g, ''); 
        
        if (!processedData[item.tier]) {
            processedData[item.tier] = {};
        }
        
        // La clave de la familia debe ser el valor que usamos en el selector: item.familia_key
        if (!processedData[item.tier][item.familia_key]) {
            processedData[item.tier][item.familia_key] = {};
        }

        // Usamos el SKU limpio como clave final del producto
        processedData[item.tier][item.familia_key][cleanSku] = {
            descripcion: item.descripcion,
            precio: item.precio,
            sku: cleanSku, 
            codigo_barra: item.codigo_barra
        };
    });
    return processedData;
}

// CATALOG_DATA es ahora un objeto de 3 niveles: Tier -> Familia -> {Productos}
const CATALOG_DATA = processCatalogData(RAW_CATALOG_DATA);

const FAMILIA_OPTIONS = {
    'NG': 'Sin Graduación / Neutros',
    'MO': 'Monofocal',
    'PN': 'Progresivo Newton',
    'NP': 'Progresivo Newton Plus',
    'MI': 'Micas'
};


// =================================================================
// 3. EVENTOS Y LÓGICA DE LA APLICACIÓN
// (TU CÓDIGO PERMANECE IGUAL)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tier').addEventListener('change', updateFamiliaOptions);
    document.getElementById('familia').addEventListener('change', updateProductOptions);
    document.getElementById('productoFinal').addEventListener('change', generateEtiqueta);
    // Inicializar las opciones al cargar la página
    updateFamiliaOptions(); 
});


function updateFamiliaOptions() {
    const tier = document.getElementById('tier').value;
    const familiaSelect = document.getElementById('familia');
    familiaSelect.innerHTML = '<option value="">-- Selecciona --</option>';

    if (tier && CATALOG_DATA[tier]) {
        const availableFamilias = Object.keys(CATALOG_DATA[tier]);

        const sortedFamilias = availableFamilias.sort((a, b) => {
            return (FAMILIA_OPTIONS[a] || a).localeCompare(FAMILIA_OPTIONS[b] || b);
        });

        sortedFamilias.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = FAMILIA_OPTIONS[key] || key;
            familiaSelect.appendChild(option);
        });
    }

    updateProductOptions();
}


function updateProductOptions() {
    const tier = document.getElementById('tier').value;
    const familiaKey = document.getElementById('familia').value;
    const productoSelect = document.getElementById('productoFinal');
    productoSelect.innerHTML = '<option value="">-- Selecciona --</option>';

    if (!tier || !familiaKey || !CATALOG_DATA[tier] || !CATALOG_DATA[tier][familiaKey]) {
        document.getElementById('etiquetaGenerada').innerHTML = '';
        return;
    }

    const products = CATALOG_DATA[tier][familiaKey];
    const filteredProducts = {};

    for (const sku in products) {
        const product = products[sku];
        
        const precioFormateado = product.precio.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        });
        
        // Usamos el SKU limpio como la clave del producto
        const optionText = `${product.descripcion} (${precioFormateado})`;
        filteredProducts[sku] = optionText;
    }

    const sortedKeys = Object.keys(filteredProducts).sort((a, b) => {
        return filteredProducts[a].localeCompare(filteredProducts[b]);
    });

    sortedKeys.forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = filteredProducts[key];
        productoSelect.appendChild(option);
    });

    document.getElementById('etiquetaGenerada').innerHTML = '';
}


// =================================================================
// 💥 FUNCIÓN AUXILIAR AÑADIDA / MODIFICADA
// =================================================================

/**
 * Limpia el nombre del producto eliminando los prefijos "LENTx".
 * @param {string} nombre - El nombre completo del producto.
 * @returns {string} El nombre del producto sin el prefijo LENT.
 */
function limpiarNombreProducto(nombre) {
    if (!nombre) return "";
    
    // Expresión regular para encontrar "LENT" seguido de 1-5 y un espacio (al inicio de la cadena),
    // Opcionalmente seguida de un dígito/espacio adicional (para T1/T2/etc en "LENT1" si no se limpia bien).
    const regex = /^LENT[1-5]\s*/i; 
    
    // Reemplaza el prefijo encontrado con una cadena vacía y limpia espacios al inicio/final.
    let nombreLimpio = nombre.replace(regex, '').trim();
    
    // El caso "CLIP - ONS" (T1) no tiene LENT, así que no se ve afectado.
    // El caso "MICAS..." (T5) no tiene LENT, así que no se ve afectado.
    
    return nombreLimpio;
}


// =================================================================
// 💥 FUNCIÓN PRINCIPAL MODIFICADA PARA EL NUEVO FORMATO
// =================================================================

function generateEtiqueta() {
    const tier = document.getElementById('tier').value;
    const sku = document.getElementById('productoFinal').value;
    const familiaKey = document.getElementById('familia').value;
    const etiquetaContainer = document.getElementById('etiquetaGenerada');

    if (!tier || !sku || !familiaKey) {
        etiquetaContainer.innerHTML = '';
        return;
    }

    const selectedProduct = CATALOG_DATA[tier][familiaKey][sku];

    // Limpiar la descripción del producto
    const descripcionLimpia = limpiarNombreProducto(selectedProduct.descripcion);

    const precioFormateado = selectedProduct.precio.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP', 
        minimumFractionDigits: 0
    });

    // 1. GENERAR SVG del Código de Barras (Usamos un ID temporal para que JsBarcode funcione)
    const tempSvgId = 'barcode-output-' + Date.now();
    let barcodeSvgString = `<svg id="${tempSvgId}"></svg>`;

    // 2. CONSTRUIR HTML de la etiqueta con la nueva estructura
    // NOTA: Las clases 'etiqueta-simplificada-container', 'barcode-area-simplified', etc., 
    // se usan para aplicar el estilo CSS necesario (50% superior, todo negro).
    const etiquetaHTML = `
        <div id="printableArea" class="etiqueta-simplificada-container">
            
            <div class="barcode-area-simplified">
                ${barcodeSvgString} 
                
                <div class="barcode-number-simplified">
                    ${selectedProduct.codigo_barra}
                </div>
            </div>
            
            <div class="producto-precio-simplified">
                <span class="product-text">${descripcionLimpia}</span>
                <span class="price-text">${precioFormateado}</span>
            </div>

            <div style="text-align: center; margin-top: 5px;">
                <button onclick="printEtiqueta()" class="print-button">
                    Imprimir Etiqueta
                </button>
            </div>
            
        </div>
    `;

    etiquetaContainer.innerHTML = etiquetaHTML;

    // 3. Renderizar el código de barras en el SVG recién creado
    if (typeof JsBarcode !== 'undefined') {
        JsBarcode(`#${tempSvgId}`, selectedProduct.codigo_barra, {
            format: "EAN13", 
            displayValue: false, // NO mostrar el número dentro del SVG
            height: 50, // Ajuste para que ocupe el espacio
            margin: 0,
            lineColor: "#000000", // Todo en negro
            xmlDocument: document 
        });
    } else {
        console.error("JsBarcode no está cargado. No se generó el código de barras.");
    }
}


// =================================================================
// 4. FUNCIÓN DE IMPRESIÓN (SOLO ETIQUETA)
// (TU CÓDIGO PERMANECE IGUAL, solo se completa el alert)
// =================================================================

function printEtiqueta() {
    const printableArea = document.getElementById('printableArea');
    
    if (!printableArea) {
        alert("No hay etiqueta generada para imprimir.");
        return; // Aseguramos que la función termine aquí si no hay área imprimible
    }
    
    // Lógica para impresión (por ejemplo, abrir una ventana o usar CSS media print)
    // Ejemplo de uso de CSS Media Print (más limpio):
    window.print(); 
}
