import Link from 'next/link';
import Card from '../../components/Card';

export default function DefaultNotificationPage() {
    return (
      <div>
        <Card> 
          <div>Default Notification Dashboard</div>
          <Link href='/complex-dashboard/archived'> Archived </Link>  
        </Card>
        

      </div>
    );
  }

  