import { motion } from 'framer-motion';
import { Check as LucideCheck } from 'lucide-react';
import PropTypes from 'prop-types';

const Check = ({ size = 16, color = 'currentColor', className = '', circle = false, animate = false }) => {
  const checkMark = (
    <LucideCheck 
      size={size} 
      color={color} 
      className={className}
      {...(animate && {
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.5 }
      })}
    />
  );

  if (circle) {
    return (
      <motion.div 
        className={`inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 ${className}`}
        {...(animate && {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { type: 'spring', stiffness: 260, damping: 20 }
        })}
      >
        {checkMark}
      </motion.div>
    );
  }

  return checkMark;
};

Check.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  circle: PropTypes.bool,
  animate: PropTypes.bool,
};

export default Check;