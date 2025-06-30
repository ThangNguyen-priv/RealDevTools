import ToolHeader from '../../../components/common/ToolHeader/ToolHeader'
import { useLocation } from 'react-router-dom'
import { usePathName } from '../../../hooks';
import WordCounterContent from '../../../components/features/WordCounterContent/WordCounterContent';

export default function WordCounterLayout() {
  const location = useLocation();
  const pathName = usePathName(location.pathname);
    return (
    <div>
        <ToolHeader pathName={pathName}/>
        <WordCounterContent />
    </div>
  )
}
