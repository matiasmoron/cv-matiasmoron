const transformDataObjectives = ({title,icon,data}, appLanguage) => {
  const formatData = [];

  data.map((element) => {
    return formatData.push(
      element[appLanguage],
    )
  });

  return {
    formatData,
    icon,
    title: title[appLanguage]
  }
};

export default transformDataObjectives;