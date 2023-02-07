import { MembersPartItem } from '../interfaces/members-part-item.interface';

export const MEMBERS_PARTS_ITEMS: readonly MembersPartItem[] = [
  {
    partName: 'CONDUCTOR',
    imageSource: 'conductor.jpg',
    altText: 'Héja Benedek',
    members: [{ memberName: 'Héja Benedek', memberId: 'heja-benedek' }],
    isMiddleCart: true,
  },
  {
    partName: 'FIRST_VIOLIN',
    imageSource: 'violin1.jpg',
    altText: 'group photo of the first violinists',
    members: [
      { memberName: 'Nánay Mihály', memberId: 'nanay-mihaly' },
      { memberName: 'Csikós Veronika', memberId: 'csikos-veronika' },
      { memberName: 'Horváth Dóra', memberId: 'horvath-dora' },
      { memberName: 'Ábrahám Ferenc', memberId: 'abraham-ferenc' },
      { memberName: 'Cseuz Annamária', memberId: 'cseuz-annamaria' },
      { memberName: 'Makk-Szibek Barbara', memberId: 'makk-szibek-barbara' },
    ],
    isMiddleCart: false,
  },
  {
    partName: 'SECOND_VIOLIN',
    imageSource: 'violin2.jpg',
    altText: 'group photo of the second violinists',
    members: [
      { memberName: 'Török Eszter', memberId: 'torok-eszter' },
      { memberName: 'Renczesné Unger Anna', memberId: 'renczesne-unger-anna' },
      { memberName: 'Kardos Virág', memberId: 'kardor-virag' },
      { memberName: 'Kézdy Luca', memberId: 'kezdy-luca' },
      { memberName: 'Mravinac Anna', memberId: 'mravinac-anna' },
      { memberName: 'Petneházy Réka', memberId: 'petnehazy-reka' },
      { memberName: 'Németh-Tatai Lilla', memberId: 'nemeth-tati-lilla' },
    ],
    isMiddleCart: false,
  },
  {
    partName: 'VIOLA',
    imageSource: 'viola.jpg',
    altText: 'group photo of the violists',
    members: [
      { memberName: 'Nyeső Viktória', memberId: 'nyeso-viktoria' },
      { memberName: 'Tóth Balázs', memberId: 'toth-balazs' },
      { memberName: 'Lukács Márta', memberId: 'lukacs-marta' },
      { memberName: 'Pertics Botond', memberId: 'pertics-botond' },
    ],
    isMiddleCart: false,
  },
  {
    partName: 'CELLO',
    imageSource: 'cello.jpg',
    altText: 'group photo of the cellists',
    members: [
      { memberName: 'Horváth Cecília', memberId: 'horvath-cecilia' },
      { memberName: 'Nánay-Aba Emese', memberId: 'nany-aba-emese' },
      { memberName: 'Almási Júlia', memberId: 'almasi-julia' },
      { memberName: 'Gadó Benedek', memberId: 'gado-benedek' },
    ],
    isMiddleCart: false,
  },
  {
    partName: 'BASSO',
    imageSource: 'basso.jpg',
    altText: 'Király Miklóss',
    members: [{ memberName: 'Király Miklós', memberId: 'kiraly-miklos' }],
    isMiddleCart: true,
  },
];
