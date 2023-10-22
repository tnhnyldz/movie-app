class Helper {
  formatDate(date, language = "en-US") {
    const originalDate = new Date(date);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = originalDate.toLocaleDateString(language, options);
    // console.log(formattedDate);
    return formattedDate;
  }
  getYear(date, language = "en-US") {
    const originalDate = new Date(date);
    const options = { year: "numeric" };
    const formattedDate = originalDate.toLocaleDateString(language, options);
    return formattedDate;
  }
  formatDollar(data) {
    const formattedData = (data / 1000000).toFixed(2); 
    const result = `$${formattedData}M`;
    return result;
  }
}

export default new Helper();
