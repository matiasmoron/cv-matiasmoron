const transformPersonalData = (data, appLanguage) => {
  const formatLanguages = [];
  const { languages, occupation, degree, extract } = data;

  languages.map(({type,level}) => {
    return formatLanguages.push({
      type: type[appLanguage],
      level: level[appLanguage]
    })
  });

  return {
    ...data,
    occupation: occupation[appLanguage],
    extract: extract[appLanguage],
    degree: degree['name'][appLanguage],
    languages: formatLanguages,
  }
};

export default transformPersonalData;