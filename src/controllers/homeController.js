


const getHomePgage = (req,res) => {
    res.send('Hello World!')
}

const getABC = (req,res) => {
    res.send('check abc!')
}

const hiep = (req, res) => {
    // res.send('<h1>hiep ne</h1>')
    res.render('sample.ejs')
  }

module.exports = {
    getHomePgage,
    getABC,
    hiep
    
}