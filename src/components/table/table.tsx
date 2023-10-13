import { FC } from 'react';
import { replaceWithJsx } from '../../utils';
import { Button } from '../button';
import { Flex } from '../flex';
import { Link } from '../link';
import { Text } from '../text';
import styles from "./table.module.scss";

interface TableProps {
  data: any[];
}

const labels = {
	type: "Fee Type",
	cost: "Cost (to Applicat Living in the U.S.)",
	abroad: "Cost (to Applicant Living Abroad)"
}

const Table: FC<TableProps> = ({ data }) => {
  const headers = data.length ? Object.keys(data[0]) : [];

  const parsePrice = (value: string): number => {
    const parsed = parseFloat(value.replace(/[^0-9.]/g, ''));
    return isNaN(parsed) ? 0 : parsed;
  };

  const totalCost = data.reduce((acc, item) => acc + parsePrice(item.cost), 0);
  const totalAbroad = data.reduce((acc, item) => acc + parsePrice(item.abroad), 0);

  return (
    <>
      <div className={styles.root}>
        <Flex alignItems='center' justifyContent='space-between' className={styles.header}>
          <Text variant='h4' className={styles.title}>
            Mandatory Government Fees for Green Cards
          </Text>
          <Button variant='danger' border='m' size='small'>
            Apply now
          </Button>
        </Flex>
      <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{labels[header as keyof typeof labels]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              {item.type.label.includes('%') ? (replaceWithJsx(item.type.label, item.type.tags)) : (
                item.type.label
              )}
            </td>
            <td>{item.cost}</td>
            <td>{item.abroad}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${totalCost}</td>
          <td>${totalAbroad}</td>
        </tr>
      </tfoot>
      </table>
      </div>
      <Flex className={styles.calc} alignItems='center' justifyContent='flex-end'>
        <Text weight='xs'>Fees are subject to change, please use <Link target='_blank' href='https://www.uscis.gov/feecalculator'>this calculator</Link></Text>
      </Flex>
      </>
  );
}

export default Table;
