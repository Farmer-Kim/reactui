import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI-Implement/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AccordionTest: Story = {
  args: {
    title: "Accordion test!" ,
    contents: `드졸오야 깅파엏 체질면서 라투의 봅인어서 킨오옹고가 긴아오니를 기다 에르런샌앙을이다 워믕히모처도. 곱크기르요 언브뎐아는 뱐냄고 굴후자면서 거아츰임은 흔을티어, 바변흐만하의. 과르잘끙에게서 타기귾한이다, 상억앝을 아꺼 안시풉컁으로 안개룰바를 뵨하로 자겾은 쿠뎐에서. 렐근너앙러 알마쟌의 놔애즈갤지 초른쳐 쳔엘곤 박훔으로서 우년아솨, 운는다. 레라밈 베나까에 게머다지의 리읆밍에의 싰니깅앋기 셔퐙조난을 가둧티즈대님의 암전이다 머다도숴다. 괸흐 로메시다 플안간비랜욜을 힌자에 캔섹볼있져소얏은 히횽을쪈요를. 도자혔 하칭도웃 멕다고 두드와 작으띠어아까지 오안차까를 듮딘 어어짜있이 스갸디는 덥먈놩더민과.

    샤꼉즈협고 이무묠믄다 서커르구는 들안칠마트우도 거겨벼싀다 의누죊이. 다개딘우의 자드 아비 아즈에 진굼 과있잭으로 르실 테잡을, 앙자니여당이. 으셔딫고 지댄이고 차몸차보노다 샘앻은 축타다온이어야 알닥인에다. 댁히오귀헤를 락지어 겅헤허닛, 애아녀나다가 가후다 던킹나 수켤설을 히자늰나의 벧킉기다. 라팸으니만큼 노젭수면 처운이 자늠슈점 저조츠는 달세로늡준이라 놀놋제늤의 인겨미, 시댇어진젼려와. 겨바우를 이디바돈한 츰사카뉴다 즌오해캏에서 혀노압녕폲나는 히시도 은벱, 헝굉습니다.
    
    들시고 독갰어 호롱훕고 맘다둥어, 이허던나는. 바잘 디가란사빤 아왜로 앙기긱은, 이셔제으션어 멭빕믹어에 엑넹러갠이 뭐에도 심악에서 이라쟈란 가닝을. 엔고를 창이튼녜다 기수베마지 웄극옥줘지 담시 센이는 넌셩탁시즌 이앨해즈 아와더, 곡리다 그싣. 겅따몰아 문긴모느자체 킨제펴란이 먼꽤간힌 크아는 어간거든. 탕요째자를 삭송핵쥬 씽읠은 긴숴에 소녈났의 먼하잴 꼼으 곌거다 알모를 돈고를 둠라줭이. 뵝아 빔친아사드를 일필미어 떠디과는 위그 누엔히교흔읍시다. 벡킴롸어더의 아익이리다 므호하뢜을 동간꽈엘자교디가 듭진, 잡르뭣으냐 앴닌개에서. 아맚답사둔카도 쿠쓔사어다 장뜨 자몌게 동오둔효가 럼다베그버련이, 즈센첩 애매호혀는 시르여임 보자인으헤를.`,
  },
};

export const AccordionTest2: Story = {
    args: {
      title: "아코디언 테스트" ,
      contents: `빨래요 교육이어 민족도, 있다 위한 그래 가능하다, 주는, 가정이 젊다. 저쪽을 있는 대감을 피해자는 생각은 등 더 태우어라, 얼핏 끝난다. 개발으로 중 구성체로, 원자력을 당시다 외롭다. 상식화되고 김은 형제자매다 나는 판단한다. 정보를 민중을 사고에 강조한 않는다. 신혼에게 하게 아닌 바로 살아 읽는 꼽힐 몫을 나로 생각한다.

      비로소 입문의, 명령은 블록에서 스위치의 답사하다. 한다 내지 넣은 자신에서 평화롭고 합니다 있다. 일체가 광고를 구상은 고기와 찰나를 이룬가. 유독 하지만 아름답는 빛난, 듭니다. 말은 처음은 과정이 데 특징을 나가는 맡아야 차자에서 버리라. 이차에 열에, 삶과 그 4,030,000원 하다.
      
      식사가 많아 하여 분화되고, 가리킨 이런 진골처럼 목사가, 보지. 좀 세상이 다소 이날을 하다 것 잡히어 재미있다. 주장을 계시오, 어떤 정도의 형님은 맏며느리를 부드럽다. 끝은 넘어지면서 여자는 것 사이는, 있은 하다. 되는 살맛의, 국풍파 처음이 있게 시작되기 전쟁에 급한데 복잡할 줄어들라. 사람을 그 정형외과는 식당을 실명제 꾸민다. 잔뜩 우애하는 기본적 못생기다 앞에서 나오다.`,
    },
  };