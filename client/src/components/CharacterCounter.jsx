
const CharacterCounter = ({ count, limits, selectedPlatforms }) => {
  const getLimitForPlatform = (platform) => limits[platform] || Infinity;
  const getStatusColor = (platform) => {
    const limit = getLimitForPlatform(platform);
    if (count > limit) return 'text-danger';
    if (count > limit * 0.9) return 'text-warning';
    return 'text-success';
  };

  return (
    <div className="character-counter">
      <h5>Character Count</h5>
      <div className="count-display">
        <span className="count">{count}</span>
      </div>
      {selectedPlatforms.length > 0 && (
        <div className="platform-limits">
          {selectedPlatforms.map(platform => (
            <div key={platform} className="platform-limit">
              <span>{platform}: </span>
              <span className={getStatusColor(platform)}>
                {count} / {getLimitForPlatform(platform)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterCounter;
