import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';
import {
  Doughnut, Line, PolarArea,
} from 'react-chartjs-2';
import { Card } from 'shared/ui/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import styles from './AdminPanelPage.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  RadialLinearScale,
);

// @ts-ignore
const skipped = (ctx, value) => (ctx.p0.skip || ctx.p1.skip ? value : undefined);
// @ts-ignore
const down = (ctx, value) => (ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined);

const data: ChartData<'line', number[], string> = {
  labels: [
    '1 Июня',
    '2 Июня',
    '3 Июня',
    '4 Июня',
    '5 Июня',
    '6 Июня',
    '7 Июня',
    '8 Июня',
    '9 Июня',
    '10 Июня',
  ],
  datasets: [
    {
      label: 'Количество пользователей в системе',
      data: [1, 4, 3, 10, 18, 20, 25, 20, 44, 41],
      backgroundColor: 'black',
      borderColor: '#06fc99',
      segment: {
        // @ts-ignore
        borderColor: (ctx) => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
        // @ts-ignore
        borderDash: (ctx) => skipped(ctx, [6, 6]),
      },
      spanGaps: true,
    },
  ],
};

const data2: ChartData<'doughnut', number[], string> = {
  labels: [
    'IT',
    'Business',
    'Economy',
  ],
  datasets: [
    {
      label: 'Количество Статей',
      data: [32, 12, 17],
      borderColor: 'transparent',
      backgroundColor: [
        '#06fc99',
        '#0040ea',
        '#a98eea',
      ],
    },
  ],
};

const data3: ChartData<'polarArea', number[], string> = {
  labels: [
    'IT',
    'Business',
    'Economy',
  ],
  datasets: [
    {
      label: 'Суммарное количество просмотров',
      data: [10423, 5934, 4223],
      borderColor: 'transparent',
      backgroundColor: [
        '#06fc99',
        '#0040ea',
        '#a98eea',
      ],
    },
  ],
};

const AdminPanelPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      <VStack max gap="16">
        <Card className={styles.bigCard}>
          <Line
            data={data}
          />
        </Card>

        <HStack max gap="16">
          <Card className={styles.smallCard}>
            <Doughnut data={data2} />
          </Card>

          <Card className={styles.smallCard}>
            <PolarArea data={data3} />
          </Card>
        </HStack>
      </VStack>
    </PageWrapper>
  );
});

export default AdminPanelPage;
