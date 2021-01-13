import PropTypes from "prop-types";
import s from "./Statistics.module.css";
const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title !== undefined && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((stat) => (
            <li
              className={s.item}
              key={stat.id}
              style={{ backgroundColor: randColor() }}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return color;
}

export default Statistics;
