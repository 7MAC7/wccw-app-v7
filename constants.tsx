
import { TimelineEvent, NewsItem, HistoryDoc } from './types';

export const APP_PRIMARY_COLOR = '#4F46E5'; // Indigo-600

export const TIMELINE_DATA: TimelineEvent[] = [
  { year: '1992', title: 'WCCW Founded', description: 'Washington Coalition for Comfort Women Issues (WCCW) was established in Washington D.C.' },
  { year: '2007', title: 'HR 121 Passed', description: 'The U.S. House of Representatives passed House Resolution 121, calling for an apology from Japan.' },
  { year: '2014', title: 'Comfort Women Memorial', description: 'Dedication of the Comfort Women Memorial in Fairfax County, VA.' },
  { year: '2019', title: 'Statue of Peace', description: 'The Statue of Peace was permanently installed in Annandale, VA.' },
  { year: '2022', title: '30th Anniversary', description: 'Celebrating 30 years of dedicated advocacy in the United States.' }
];

export const HISTORY_DOCS: HistoryDoc[] = [
  {
    id: 'h1',
    title: '미얀마 미치나의 위안부 피해자들 (1944)',
    description: '연합군에 의해 발견된 만삭의 박영심 할머니와 피해자들의 모습입니다. 일본군의 조직적인 성노예 제도의 참혹함을 보여주는 가장 대표적인 증거 사진 중 하나입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?auto=format&fit=crop&w=800&q=80', // 대체 이미지 (사료 성격의 무채색 배경)
    source: 'National Archives and Records Administration (NARA)'
  },
  {
    id: 'h2',
    title: '강제 동원의 기록과 군 위안소',
    description: '일제는 전장의 사기를 고취시킨다는 명목하에 아시아 전역에 군 위안소를 설치했습니다. 수많은 어린 소녀들이 속임수와 강압에 의해 끌려가 인권을 유린당했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80',
    source: 'Historical Evidence Collection'
  },
  {
    id: 'h3',
    title: '일본군 공문서에 나타난 조직적 개입',
    description: '일본 정부와 군이 위안소 설치와 운영, 여성들의 이송에 직접적으로 관여했음을 보여주는 다수의 공문서가 발견되었습니다. 이는 위안부 제도가 국가적 차원의 범죄였음을 증명합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&w=800&q=80',
    source: 'Japanese Military Records'
  }
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'WCCW 30th Anniversary Gala',
    date: '2024.11.15',
    summary: 'Join us for an evening of remembrance and solidarity as we celebrate 30 years of WCCW.',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'Education Program Update',
    date: '2024.10.20',
    summary: 'Our new curriculum for local high schools has been successfully piloted in Virginia.',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80'
  }
];
