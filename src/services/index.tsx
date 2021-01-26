import moment from 'moment';

export const consumablesCalc = (i: any) => {
  const [num, temp] = i.consumables.split(' ');
  const convertion = moment.duration(num, temp).asHours();

  return convertion;
}