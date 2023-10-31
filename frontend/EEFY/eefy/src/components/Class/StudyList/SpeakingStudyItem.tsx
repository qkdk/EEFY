import Score from './Score';
import SemiCircleGauge from './SemiCircleGuage';

function SpeakingStudyItem({ props }) {
  const newPronunciationScore = Math.round((props.pronunciationScore / 5) * 100);
  return (
    <div className='w-full mt-2 p-3 shadow-lg rounded-3xl bg-base-200 boxShadow'>
      <div className='flex justify-between items-center h-16'>
        <div className='ml-5 flex flex-col'>
          <div>
            <p className='text-xl font-bold'>{props.title}</p>
          </div>
          <div>
            <p className='text-base text-blue-600/50'>완료일 : {props.finishDate}</p>
          </div>
        </div>
        <div className='mr-5 flex justify-center items-center gap-6'>
          <div className='flex items-center gap-4'>
            <p className=' text-base-content'>발음 분석 평가</p>
            <Score score={newPronunciationScore} />
          </div>
          <div className='flex items-center'>
            <p>단어 유사도</p>
            <SemiCircleGauge gauge={props.accuracyScore} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakingStudyItem;
