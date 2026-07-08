
const PlatformSelector = ({ platforms, selectedPlatforms, onChange }) => {
  const togglePlatform = (platform) => {
    onChange(
      selectedPlatforms.includes(platform)
        ? selectedPlatforms.filter(p => p !== platform)
        : [...selectedPlatforms, platform]
    );
  };

  return (
    <div className="platforms">
      {platforms.map(platform => (
        <div
          key={platform}
          className={`platform-chip ${selectedPlatforms.includes(platform) ? 'active' : ''}`}
          onClick={() => togglePlatform(platform)}
        >
          {platform}
        </div>
      ))}
    </div>
  );
};

export default PlatformSelector;
