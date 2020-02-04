import {useRouter} from 'next/router';
import Link from 'next/link';
import Button from '@material-ui/core/Button';


const Print = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <div>
      
    </div>
  )
}

export default Print;