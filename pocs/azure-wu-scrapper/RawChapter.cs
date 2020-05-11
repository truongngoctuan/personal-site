namespace wu_scrapper
{
    public class RawChapter
    {
        public string Url { get; set; }
        public string Name { get; set; }

        public override string ToString()
        {
            return $"RawChapter: {Name}, {Url}";
        }
    }
}
