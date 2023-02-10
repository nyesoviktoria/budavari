import { MembersPartItem } from '../interfaces/members-part-item.interface';

export const MEMBERS_PARTS_ITEMS: readonly MembersPartItem[] = [
  {
    partName: 'CONDUCTOR',
    imageSource: 'conductor.jpg',
    altText: 'Héja Benedek',
    members: [{ memberName: 'Héja Benedek', memberId: 'heja-benedek', isOnGyes: false }],
    isMiddleCart: true,
  },
  {
    partName: 'FIRST_VIOLIN',
    imageSource: 'violin1.jpg',
    altText: 'group photo of the first violinists',
    members: [
      { memberName: 'Nánay Mihály', memberId: 'nanay-mihaly', isOnGyes: false },
      {
        memberName: 'Csikós Veronika',
        memberId: 'csikos-veronika',
        isOnGyes: false,
      },
      { memberName: 'Horváth Dóra', memberId: 'horvath-dora', isOnGyes: false },
      {
        memberName: 'Ábrahám Ferenc',
        memberId: 'abraham-ferenc',
        isOnGyes: false,
      },
      {
        memberName: 'Cseuz Annamária',
        memberId: 'cseuz-annamaria',
        isOnGyes: false,
      },
      {
        memberName: 'Makk-Szibek Barbara',
        memberId: 'makk-szibek-barbara',
        isOnGyes: false,
      },
    ],
    isMiddleCart: false,
  },
  {
    partName: 'SECOND_VIOLIN',
    imageSource: 'violin2.jpg',
    altText: 'group photo of the second violinists',
    members: [
      { memberName: 'Török Eszter', memberId: 'torok-eszter', isOnGyes: false },
      {
        memberName: 'Renczesné Unger Anna',
        memberId: 'renczesne-unger-anna',
        isOnGyes: false,
      },
      { memberName: 'Kardos Virág', memberId: 'kardor-virag', isOnGyes: false },
      { memberName: 'Kézdy Luca', memberId: 'kezdy-luca', isOnGyes: false },
      {
        memberName: 'Mravinac Anna',
        memberId: 'mravinac-anna',
        isOnGyes: false,
      },
      {
        memberName: 'Petneházy Réka',
        memberId: 'petnehazy-reka',
        isOnGyes: false,
      },
      {
        memberName: 'Németh-Tatai Lilla',
        memberId: 'nemeth-tati-lilla',
        isOnGyes: true,
      },
    ],
    isMiddleCart: false,
  },
  {
    partName: 'VIOLA',
    imageSource: 'viola.jpg',
    altText: 'group photo of the violists',
    members: [
      {
        memberName: 'Nyeső Viktória',
        memberId: 'nyeso-viktoria',
        isOnGyes: false,
      },
      { memberName: 'Tóth Balázs', memberId: 'toth-balazs', isOnGyes: false },
      { memberName: 'Lukács Márta', memberId: 'lukacs-marta', isOnGyes: false },
      {
        memberName: 'Pertics Botond',
        memberId: 'pertics-botond',
        isOnGyes: false,
      },
    ],
    isMiddleCart: false,
  },
  {
    partName: 'CELLO',
    imageSource: 'cello.jpg',
    altText: 'group photo of the cellists',
    members: [
      {
        memberName: 'Horváth Cecília',
        memberId: 'horvath-cecilia',
        isOnGyes: false,
      },
      {
        memberName: 'Nánay-Aba Emese',
        memberId: 'nanay-aba-emese',
        isOnGyes: false,
      },
      { memberName: 'Almási Júlia', memberId: 'almasi-julia', isOnGyes: false },
      { memberName: 'Gadó Benedek', memberId: 'gado-benedek', isOnGyes: false },
      {
        memberName: 'Petneházy Gyöngyvér',
        memberId: 'petnehazy-gyongyver',
        isOnGyes: true,
      },
    ],
    isMiddleCart: false,
  },
  {
    partName: 'CONTRABASS',
    imageSource: 'basso.jpg',
    altText: 'Király Miklós',
    members: [
      {
        memberName: 'Király Miklós',
        memberId: 'kiraly-miklos',
        isOnGyes: false,
      },
    ],
    isMiddleCart: true,
  },
];
