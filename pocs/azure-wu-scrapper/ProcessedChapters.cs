using System.Collections.Generic;

namespace wu_scrapper
{
    public class ProcessedChapters
    {
        public string CodeName { get; set; }
        public string UrlPattern { get; set; }
        //public string NamePattern { get; set; }
        public IEnumerable<ProcessedChapter> Chapters;
    }

    public class ProcessedChapter
    {
        public string Url { get; set; }
        public string Name { get; set; }

        public override string ToString()
        {   
            return $"RawChapter: {Name}, {Url}";
        }
    }
}
