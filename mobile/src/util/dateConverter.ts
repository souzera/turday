const formatterDateStringDDMM = (date: any) => {
    // recieved pattern: 2024-06-19T00:00:00-03:00
    const mes: string = date.slice(5, 7);
    const dia: string = date.slice(8, 10);
    return `${dia}/${mes}`;
  };

export {formatterDateStringDDMM};