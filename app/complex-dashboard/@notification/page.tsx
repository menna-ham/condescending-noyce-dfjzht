import Link from 'next/link';
import Card from '../../components/Card';

export default function NotificationPage() {
    return (
      <div>
        <Card> 
          <div>Notification Dashboard</div>
          <Link href='/complex-dashboard/archived'> Archived </Link>  
        </Card>
        

      </div>
    );
  }

  