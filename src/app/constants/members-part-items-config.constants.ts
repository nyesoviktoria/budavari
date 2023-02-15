import { MembersPartItem } from '../interfaces/members-part-item.interface';

export const MEMBERS_PARTS_ITEMS: readonly MembersPartItem[] = [
  {
    partName: 'CONDUCTOR',
    imageSource: 'conductor.jpg',
    altText: 'Héja Benedek',
    members: [{ memberName: 'Héja Benedek', memberId: 'HEJA_BENEDEK', isOnGyes: false }],
    isMiddleCart: true,
  },
  {
    partName: 'FIRST_VIOLIN',
    imageSource: 'violin1.jpg',
    altText: 'group photo of the first violinists',
    members: [
      { memberName: 'Nánay Mihály', memberId: 'NANAY_MIHALY', isOnGyes: false },
      {
        memberName: 'Csikós Veronika',
        memberId: 'CSIKOS_VERONIKA',
        isOnGyes: false,
      },
      { memberName: 'Horváth Dóra', memberId: 'HORVATH_DORA', isOnGyes: false },
      {
        memberName: 'Ábrahám Ferenc',
        memberId: 'ABRAHAM_FERENC',
        isOnGyes: false,
      },
      {
        memberName: 'Cseuz Annamária',
        memberId: 'CSEUZ_ANNAMARIA',
        isOnGyes: false,
      },
      {
        memberName: 'Makk-Szibek Barbara',
        memberId: 'MAKK_SZIBEK_BARBARA',
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
      { memberName: 'Török Eszter', memberId: 'TOROK_ESZTER', isOnGyes: false },
      {
        memberName: 'Renczesné Unger Anna',
        memberId: 'RENCZESNE_UNGER_ANNA',
        isOnGyes: false,
      },
      { memberName: 'Kardos Virág', memberId: 'KARDOS_VIRAG', isOnGyes: false },

      {
        memberName: 'Mravinac Anna',
        memberId: 'MRAVINAC_ANNA',
        isOnGyes: false,
      },
      {
        memberName: 'Németh-Tatai Lilla',
        memberId: 'NEMETH_TATAI_LILLA',
        isOnGyes: false,
      },
      {
        memberName: 'Petneházy Réka',
        memberId: 'PETNEHAZY_REKA',
        isOnGyes: false,
      },
      { memberName: 'Kézdy Luca', memberId: 'KEZDY_LUCA', isOnGyes: true },
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
        memberId: 'NYESO_VIKTORIA',
        isOnGyes: false,
      },
      { memberName: 'Tóth Balázs', memberId: 'TOTH_BALAZS', isOnGyes: false },
      { memberName: 'Lukács Márta', memberId: 'LUKACS_MARTA', isOnGyes: false },
      {
        memberName: 'Pertics Botond',
        memberId: 'PERTICS_BOTOND',
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
        memberId: 'HORVATH_CECILIA',
        isOnGyes: false,
      },
      {
        memberName: 'Nánay-Aba Emese',
        memberId: 'NANAY_ABA_EMESE',
        isOnGyes: false,
      },
      { memberName: 'Almási Júlia', memberId: 'ALMASI_JULIA', isOnGyes: false },
      { memberName: 'Gadó Benedek', memberId: 'GADO_BENEDEK', isOnGyes: false },
      {
        memberName: 'Petneházy Gyöngyvér',
        memberId: 'PETNEHAZY_GYONGYVER',
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
        memberId: 'KIRALY_MIKLOS',
        isOnGyes: false,
      },
    ],
    isMiddleCart: true,
  },
];
