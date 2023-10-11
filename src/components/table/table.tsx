import { FC } from 'react';
import { replaceWithJsx } from '../../utils';
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
    <div className={styles.root}>
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
  );
}

export default Table;
