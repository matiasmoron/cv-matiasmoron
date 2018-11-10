const transformGeneralData = ({title,icon,data}, appLanguage) => {
  const formatData = [];

  data.map(({companyName,description,position,time,extra}) => {
    return formatData.push({
      companyName,
      extra,
      description: description[appLanguage],
      position: position[appLanguage],
      time: {
        start:time.start[appLanguage],
        end:time.end[appLanguage]
      }

    })
  });

  return {
    formatData: formatData,
    icon,
    title: title[appLanguage]
  }
};

export default transformGeneralData;