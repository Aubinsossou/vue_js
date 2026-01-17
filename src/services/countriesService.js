export const countries = async() => {
    const response = await fetch('https://restcountries.com/v3.1/independent?status=true')
    return await response.json()
}
