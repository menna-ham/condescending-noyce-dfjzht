import Link from 'next/link';
import Card from '../../../components/Card';

export default function NotificationPage() {
    return (
      <>
        <Card> 
            <h1>Notification Dashboard </h1>
        <Link href='/complex-dashboard'> Default </Link>

        </Card>
      </>
    );
  }

  