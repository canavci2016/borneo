const {createLogger, format, transports} = require('winston');
require('winston-daily-rotate-file');

const formatCombination = format.combine(
  format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
  format.errors({stack: true}),
  format.splat(),
  format.json()
);

module.exports = ({filePath = "logs"}) => {

  const dailyRotateFile = new transports.DailyRotateFile({
    filename: filePath + '/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: '14d'
  });

  return createLogger({
    level: 'silly',
    format: formatCombination,
    defaultMeta: {service: 'your-service-name'},
    transports: [
      dailyRotateFile
    ]
  });

};

const debugLogger = createLogger({
  level: 'silly',
  format: formatCombination,
  defaultMeta: {service: 'user-service'},
  transports: [
    new transports.File({filename: 'logs/debug.log'}),
    new transports.Console(),
  ],
});

//module.exports.debugLogger = debugLogger;