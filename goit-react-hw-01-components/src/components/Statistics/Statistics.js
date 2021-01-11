import PropTypes from 'prop-types';
import StatisticsStyle from './Statistics.css'
const Statistics = ({title,stats}) => {
    return  (
<section className="statistics">
{title !== undefined && <h2 className="title">{title}</h2>}
  

  <ul className="stat-list">
        <li className="item">
          {
            stats.map(stat =>(
              <>
              <span key={stat.id} className={StatisticsStyle.label}>
                {stat.label}
            </span>
          <span className={StatisticsStyle.percentage}>{stat.percentage}%</span>
          
          </>))
}
   
         
      
    </li>
   
  </ul>
</section>
    )

}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.object,
       };
  
  export default Statistics;