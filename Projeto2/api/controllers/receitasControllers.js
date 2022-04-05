module.exports = {
    menu
}

function menu (req, res) {
    res.render('receitas/frm_receitasMenu.ejs',
        {title: 'Receitas', 
            autor: 'Lucas_2º DSM - Web II'
        })
}

